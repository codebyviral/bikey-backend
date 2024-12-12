import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: {
        type: Number,
        required: [true, "Trxn. amount is required!"],
        min: [0, "Trxn. amount cannot be negative"],
    },
    transaction_mode: {
        type: String,
        enum: ['upi', 'cards', 'netbanking', 'wallet', 'unknown'],
        default: 'unknown',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Transaction = mongoose.model("Transaction", transactionSchema)