import mongoose from 'mongoose';

 export interface User {    
  id: string;
  name: string;
  email: string;
  password?:string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema({
  id: { type: String, required: true , unique: true, default: () => new mongoose.Types.ObjectId().toString() },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});





const userDbModel = mongoose.model('User', userSchema);

export { userDbModel };