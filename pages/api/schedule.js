import { connectDB } from "../../util/database.js";
import Schedule from "@/models/Schedule.js";

export default async function schedule(req, res) {
  try {
    await connectDB();
    const schedule = await Schedule.find().sort({ date: 1 , startTime : 1 }).populate({
        path: "user",
        select: "username"
    });
    return res.status(200).json(schedule);
  } catch (error) {
    console.log(error);
  }
}
