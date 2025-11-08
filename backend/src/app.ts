import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import connectToDB from './db';
import User from './services/user.services';
import  routes from './routes/api';
import { errorHandler } from './middlewares/errorHandler';
import rateLimit from 'express-rate-limit';
import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/api/authRoutes';
import jwt from 'jsonwebtoken';
import carRoutes from './routes/api/car.route';


dotenv.config();
const app = express();


// Core
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));
app.use(morgan('combined'));
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
mongoose.connect(MONGO_URI as string)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


// Limits on auth
app.use('/auth', rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
}));

// API routes
app.use("/api/v1", routes);
app.use("/api/v1/payments", routes);
app.use("/api/v1/cars", carRoutes);
app.use("/api/v1/bookings", routes);
app.use("/api/v1/login", authRouter);
// Login Route
app.post("/api/v1/login", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const users = await User.getUsers();
  const user = users.find(u => u.name === name && u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret is not configured" });
  }
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  await User.createUser({ id: "some-unique-id", name: "John Doe", email: "john@example.com" });

  res.json({ message: "Login successful", token });
});



app.use(cors()); // allows frontend to connect
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});
// Errors
app.use(errorHandler);
app.use(cors());



const startServer = async () => {


  //spin up a server
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
  console.log(`Application stopped on port ${PORT}`);
  process.exit(0);
});
 
 
 
};

export default startServer;