import { Schema, model } from "mongoose";
const userSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    age: Number,
    email: String,
});
const User = model("User", userSchema);

export default User;
