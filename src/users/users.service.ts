import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async createUser(fname: string, lname: string, age: number) {
        try {
            const newUser = new this.userModel({
                fname: fname,
                lname: lname,
                age: age,
            });
            const savedUser = await newUser.save();
            return {
                message: "User insert query successful",
                data: savedUser
            };
        } catch (error) {
            return {
                message: "User insert query failed",
                error: error
            };
        }
    }

    async getAllusers() {
        try {
            const allUsers = await this.userModel.find();
            return {
                message: "Get all users query successful",
                data: allUsers
            };
        } catch (error) {
            return {
                message: "Gell all users query failed",
                error: error
            };
        }
    }

    async getUser(id: number) {
        try {
            const user = await this.userModel.findById(id);
            return {
                message: "Get user query successful",
                data: user
            };
        } catch (error) {
            return {
                message: "Get user query failed",
                error: error
            };
        }
    }

    async updateUser(id: number, body: any) {
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(id, { $set: body }, { new: true });
            return {
                message: "Update user query successful",
                data: updatedUser
            };
        } catch (error) {
            return {
                message: "Update user query failed",
                error: error
            };
        }
    }

    async deleteUser(id: number) {
        try {
            await this.userModel.findByIdAndDelete(id);
            return {
                message: "Delete user query successful",
            };
        } catch (error) {
            return {
                message: "Delete user query failed",
                error: error
            };
        }
    }
}
