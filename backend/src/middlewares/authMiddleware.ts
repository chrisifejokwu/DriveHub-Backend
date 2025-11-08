const { verifyToken } = require('../utils/jwt.js');
import type { Request, Response, NextFunction } from 'express';


interface JwtPayload {
	sub: string;
	email: string;
	[key: string]: any;
}

interface AuthenticatedRequest extends Request {
	user?: {
		id: string;
		email: string;
	};
}

const requireAuth = (
	req: AuthenticatedRequest,
	res: Response,
	next: NextFunction
) => {
	const auth = req.headers.authorization || '';
	const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
	if (!token) return res.status(401).json({ message: 'Missing token' });
	try {
		const payload = verifyToken(token) as JwtPayload | string;
		if (typeof payload === 'string' || !payload.sub || !('email' in payload)) {
			return res.status(401).json({ message: 'Invalid token payload' });
		}
		req.user = { id: payload.sub, email: (payload as JwtPayload).email };
		next();
	} catch {
		return res.status(401).json({ message: 'Invalid token' });
	}
};

module.exports = { requireAuth };