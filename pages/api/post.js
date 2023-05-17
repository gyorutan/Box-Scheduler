import { connectDB } from "../../util/database.js";
import { createdAt } from "../../util/timeStamp.js";
import Schedule from "@/models/Schedule.js";

export default async function Post(req, res) {
  try {
    await connectDB();
    const { user, date, startTime, endTime, memo } = req.body;
    const schedule = await Schedule.create({
        user,
        date,
        startTime,
        endTime,
        memo,
        createdAt
    });
    schedule.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
