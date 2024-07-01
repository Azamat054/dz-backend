import { Request, Response } from "express";
import User from "./model/User";

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    async getUserByEmail(req: Request, res: Response) {
        try {
            const user = await User.findOne({ email: req.params.email });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(204).send("User has deleted");
        } catch (error) {
            res.status(400).json(error);
        }
    }
}


export default new UserController();