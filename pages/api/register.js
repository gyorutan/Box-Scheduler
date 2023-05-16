import { connectDB } from "../../util/database.js";
import { createdAt } from "../../util/timeStamp.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

export default async function Register(req, res) {
  try {
    await connectDB();
    const { username, loginId, loginPw } = req.body;
    const hashedPassword = await bcrypt.hash(loginPw, 10);
    await User.create({
      username,
      loginId,
      loginPw: hashedPassword,
      createdAt,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
