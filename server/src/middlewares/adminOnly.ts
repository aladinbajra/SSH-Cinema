import { Request, Response, NextFunction } from 'express';

const adminOnly = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = req.app.get('db');

        const user = await db.collection('users').findOne({ _id: req.userId });

        if (user && user.role === 'admin') {
            next();
        } else {
            res.status(403).json({
                errors: { global: 'You are unauthorized for this action'}
            });
        }
    } catch (err) {
        console.error(err: );
        res.status(500).json({ errors: { global: err.message }});
    }
};

export default adminOnly;
