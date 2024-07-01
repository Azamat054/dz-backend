import User from "./model/User";

class UserService {
    async createUser(user: any) {
        return await User.create(user);
    }

    async getUserByEmail(email: string) {
        return await User.findOne({ email });
    }

    async getUserById(id: string) {
        return await User.findById(id);
    }

    async updateUser(id: string, user: any) {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();