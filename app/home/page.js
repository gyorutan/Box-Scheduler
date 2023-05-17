import React from "react";
import ScheduleItem from "./components/ScheduleItem";
import Header from "../components/Header";

export default function Home() {
  const label = "予約状況";
  return (
    <div className="mb-16 h-full">
      <Header label={label} />
      <ScheduleItem />
    </div>
  );
}
