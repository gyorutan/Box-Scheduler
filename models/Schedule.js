import { Schema, model, models } from "mongoose";

const scheduleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  memo: {
    type: String,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const Schedule = models.Schedule || model("Schedule", scheduleSchema);

export default Schedule;
