import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
}, { timestamps: true });

export interface User {
    id: string;
    fname: string;
    lname: string;
    age: number;
}