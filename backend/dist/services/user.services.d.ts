import { User } from "../models/User";
declare const UserModel: {
    getUsers: () => Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }[]>;
    createUser: (user: User) => Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    deleteById: (id: string) => Promise<boolean>;
    getByEmail: (email: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } | null>;
    getById: (id: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    }>;
    getEncryptedPasswordByEmail: (email: string) => Promise<string | undefined>;
    isUserCredentialsValid: (email: string, password: string) => Promise<boolean>;
    doesUserExistByEmail: (email: string) => Promise<boolean>;
};
export default UserModel;
//# sourceMappingURL=user.services.d.ts.map