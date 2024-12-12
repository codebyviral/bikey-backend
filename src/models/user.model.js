import mongoose from "mongoose";
import bcrypt from 'bcrypt';

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

// IMP___ NOTE don't use callback instead use func. keyword
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 12)
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullname: this.fullname,
    }, process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        fullname: this.fullname,
    }, process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);