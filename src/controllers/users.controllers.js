import UserService from "../services/UserService.js";

export const getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers();
        if (!users) {
            throw({
                status: 404,
                message: 'No users found'
            })
        } else {
            return res.json(users);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserService.getUser(req.params.id);
        if (!user) {
            throw({
                status: 404,
                message: 'User not found'
            })
        } else {
            return res.json(user);
        }
    } catch (error) {
        return res.status(error.status).json({
            message: error.message
        });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUser = async (req, res) => {
    return res.json({
        message: 'PUT User'
    });
}   

export const deleteUser = async (req, res) => {
    return res.json({
        message: 'DELETE User'
    });
}