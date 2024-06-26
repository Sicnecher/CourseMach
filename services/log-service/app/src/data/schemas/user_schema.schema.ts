import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  export const USER = mongoose.model('user', UserSchema);
