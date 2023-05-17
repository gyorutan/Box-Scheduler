"use client";

import { getUserToken } from "@/app/hooks/getUserToken";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function ScheduleItem() {
  const [schedules, setSchedules] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    getSchedule();
    const user = getUserToken();
    setCurrentUser(user.username);
    // bottomRef?.current?.scrollIntoView();
  }, []);

  const getSchedule = async () => {
    const response = await fetch("/api/schedule");
    const result = await response.json();
    console.log(result);
    setSchedules(result);
  };

  return (
    <>
      <div className="mt-16 px-8">
        <div className="wrap">
          {schedules.map((schedule) => (
            <div className="mt-4" key={schedule._id}>
              <div className="p-3 rounded-md shadow-md border bg-gray-200">
                <div className="flex justify-between border-b border-gray-400">
                  <div>
                    <div className="flex gap-3 items-center">
                      <div>{schedule.user.username}</div>
                      <div>{schedule.date}</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <button className="cursor-pointer">
                        <Image
                          width={28}
                          height={28}
                          src={"/images/delete.png"}
                          alt="Delete"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  使用時間　{schedule.startTime} ~ {schedule.endTime}
                </div>
                <div className="mt-2">{schedule.memo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 mt-16 px-8">
{schedules.map((schedule) => (
  <div
    className="mt-3 rounded-lg px-3 shadow-md border cursor-pointer hover:border-black hover:border-1"
    key={schedule._id}
  >
    <div className="py-3 px-1 flex justify-between">
      <div>{schedule.user.username}</div>
      {schedule.user.username === currentUser ? (
        <div>
          <Image
            width={28}
            height={28}
            src={"/images/delete.png"}
            alt="Delete"
          />
        </div>
      ) : null}
    </div>
    <hr />
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-left h-10">
          <td>예약</td>
          <td>{schedule.date}</td>
        </tr>
        <tr className="text-left h-10">
          <td>시작</td>
          <td>{schedule.startTime}</td>
        </tr>
        <tr className="text-left h-10">
          <td>종료</td>
          <td>{schedule.endTime}</td>
        </tr>
        <tr className="text-left h-10">
          <td>메모</td>
          <td>{schedule.memo}</td>
        </tr>
      </tbody>
    </table>
  </div>
))}
<div className="pt-24" ref={bottomRef} />
</div> */
}
