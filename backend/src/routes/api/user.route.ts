import { Router } from "express";
import userController from "../../controllers/userController";
const router = Router();

const {getUsers, createUser, findUserByEmail, } = userController;
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", findUserByEmail);


export default router;
