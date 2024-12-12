import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    phone_number: {
        type: String,
        required: true,
    },
    wallet_balance: {
        type: Number,
        default: 0,
        required: true,
        min: [0, "Wallet balance cannot be negative!"],
    },
    rating: {
        type: Number,
        default: 0,
    },
    college_id_card: {
        type: String,
        required: true,
    },
    aadhar_card: {
        type: String,
        required: true,
    },
    license: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    passport: {
        type: String,
        required: false,
    },
    transaction_history: [{
        type: mongoose.Types.ObjectId,
        ref: "Transaction",
    }],
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);