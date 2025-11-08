import  { Request, Response } from "express";
import UserService from "../services/user.services";
import { User } from "../models/User";

const getUsers = async (req: Request, res: Response) => {
  const { getUsers } = UserService;
  const userList = await getUsers();
  res.status(200).json(userList);
};


const createUser = async (req: Request, res: Response) => {
  const user = req.body as User;
  const { createUser: createUserService } = UserService;
  const userData = await createUserService(user);
  res.status(201).json(userData);
};
const findUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  const { getByEmail } = UserService;
  const userData = await getByEmail(email);
  if (!userData) {
    return res.status(404).json({ error: "User not found" });
  } else {
    res.status(200).json(userData);
  }
};

const UserController = {
  getUsers,
  createUser,
 findUserByEmail,
};


export default UserController;
