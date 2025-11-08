"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_services_1 = __importDefault(require("./services/user.services"));
const api_1 = __importDefault(require("./routes/api"));
const errorHandler_1 = require("./middlewares/errorHandler");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/api/authRoutes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const car_route_1 = __importDefault(require("./routes/api/car.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Core
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));
app.use((0, morgan_1.default)('combined'));
app.use((0, cors_1.default)());
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log('MongoDB connected');
})
    .catch((err) => {
    console.error('MongoDB connection error:', err);
});
// Limits on auth
app.use('/auth', (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
}));
// API routes
app.use("/api/v1", api_1.default);
app.use("/api/v1/payments", api_1.default);
app.use("/api/v1/cars", car_route_1.default);
app.use("/api/v1/bookings", api_1.default);
app.use("/api/v1/login", authRoutes_1.default);
// Login Route
app.post("/api/v1/login", async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email required" });
    }
    const users = await user_services_1.default.getUsers();
    const user = users.find(u => u.name === name && u.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: "JWT secret is not configured" });
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    await user_services_1.default.createUser({ id: "some-unique-id", name: "John Doe", email: "john@example.com" });
    res.json({ message: "Login successful", token });
});
app.use((0, cors_1.default)()); // allows frontend to connect
app.use(express_1.default.json());
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from backend!" });
});
// Errors
app.use(errorHandler_1.errorHandler);
app.use((0, cors_1.default)());
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
exports.default = startServer;
