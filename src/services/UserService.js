import User from '../models/User.js';

class UserService {
    constructor() {
        this.users = [];
    }
    async getUsers() {
        return await User.find();
    }
    async getUser(id) {
        return await User.findById(id);
    }
    async createUser(user) {
        return await User.create(user);
    }
    async updateUser(id, user) {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }
    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();