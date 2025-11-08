import User from '../services/user.services';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface LoginRequest {
    body: {
        email: string;
        password: string;
    };
}

interface LoginResponse {
    message: string;
    token?: string;
}

const loginUser = async (req: LoginRequest, res: { json: (data: LoginResponse) => void; status: (code: number) => { json: (data: { message?: string; error?: string }) => void } }) => {
    try {
        const { email, password } = req.body;

        // Check user exists
        const user = await User.getByEmail(email);
        if (!user) return res.status(400).json({ message: "User not found" });

        // Ensure user has password property
        if (!('password' in user)) {
            return res.status(500).json({ message: "User record is missing password field" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, (user as { password: string }).password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        // Create token
        const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export default {
    loginUser,
};  