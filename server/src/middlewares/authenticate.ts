import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;

        let token;

        if (authorizationHeader) {
            token = authorizationHeader.split(' ')[1];
        }

        
        if (token) {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET || '');

         
            req.userId = new ObjectId(decoded.user._id);
            next();
        } else {
            res.status(403).json({ errors: { global: 'You must be authenticated' }});
        }
    } catch (err) {
        res.status(401).json({ errors: { global: 'You must be authenticated' }});
    }
};

export default authenticate;
