export const authotize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }
    
    return (req, res, next) => {
        
        // Un mientras tanto: se simula un usuario logueado
        req.user = { role: 'admin' };
        
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' })
        }

        if (roles.length && !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' })
        }

        next()
    }
};