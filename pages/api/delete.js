import { connectDB } from "../../util/database.js";
import Schedule from "@/models/Schedule.js";

export default async function deleteSchedule(req, res) {
  try {
    await connectDB();
    const { postId } = req.body;
    const schedule = await Schedule.findByIdAndRemove(postId);
    schedule.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
