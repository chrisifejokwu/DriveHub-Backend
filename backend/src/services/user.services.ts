
import { User } from "../models/User";
import { userDbModel } from "../models/User";

const getUsers = async ()  => {
    const users = await userDbModel.find();
    return users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }));
}

const createUser = async (user: User) => {
    const newUser = new userDbModel(user);
    await newUser.save();

    const {_id, name, email, createdAt, updatedAt} = newUser;
    return {id: _id, name, email, createdAt, updatedAt};
}

    
const getByEmail = async (email: string) => {
    const user = await userDbModel.findOne({ email });
    if (!user) return null;
    const {_id, name, createdAt, updatedAt} = user;
    return {id: _id, name, email, createdAt, updatedAt};
}
const getById = async (id: string) => {
    const user = await userDbModel.findById(id);
    const {_id, name, email, createdAt, updatedAt} = user!;
    return {id: _id, name, email, createdAt, updatedAt};
};

const getEncryptedPasswordByEmail = async (email: string) => {
    const user = await userDbModel.findOne({ email });
    const {password} = user || {};
    return password;
}

const isUserCredentialsValid = async (email: string, password: string) => {
    return (await userDbModel.exists({ email, password })) !== null;
}

const doesUserExistByEmail = async (email: string) => {
    return (await userDbModel.exists({ email })) !== null;
}


const deleteById = async (id: string) => {
    const result = await userDbModel.findByIdAndDelete(id);
    return result !== null;
}


const UserModel = {
    getUsers,
    createUser,
    deleteById,
    getByEmail,
    getById,
    getEncryptedPasswordByEmail,
    isUserCredentialsValid,
    doesUserExistByEmail
}

export default UserModel;





 