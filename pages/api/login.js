import { connectDB } from "../../util/database.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function Login(req, res) {
  try {
    await connectDB();
    const { loginId, loginPw } = req.body;
    const currentUser = await User.findOne({ loginId }).exec();
    if (!currentUser) {
      return res.status(401).json({
        cause: "loginId",
        success: false,
      });
    }
    const comparePassword = await bcrypt.compare( loginPw, currentUser.loginPw);
    if (!comparePassword) {
      return res.status(401).json({
        cause: "loginPw",
        success: false,
      });
    }
    const token = jwt.sign(
      {
        _id: currentUser.id,
        username: currentUser.username,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7h",
      }
    );
    return res
      .status(200)
      .json({ success: true, currentUser , token });
  } catch (error) {
    console.log(error);
  }
}
