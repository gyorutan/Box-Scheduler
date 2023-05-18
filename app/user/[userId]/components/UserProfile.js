"use client";

import { getUserToken } from "@/app/hooks/getUserToken";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [schedules, setSchedules] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    getSchedule();
    const user = getUserToken();
    setCurrentUser(user.username);
    setCurrentUserId(user._id);
  }, []);

  const getSchedule = async () => {
    const response = await fetch("/api/schedule");
    const result = await response.json();
    setSchedules(result);
  };

  const deleteSchedule = async (id) => {
    const postId = id;
    const response = await fetch(`/api/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: postId }),
    });
    const result = await response.json();
    if (result.success) {
      getSchedule();
    }
  };

  return (
    <div className="mt-16 px-8">
      <div className="wrap">
        <div>
          <p>自分のスケジュールリスト</p>
          {schedules.map((schedule) => (
            <div className="mt-4" key={schedule._id}>
              {currentUserId === schedule.user._id ? (
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
                        {schedule.user.username === currentUser ? (
                          <button
                            className="cursor-pointer hover:bg-red-400 rounded-full"
                            onClick={() => {
                              deleteSchedule(schedule._id);
                            }}
                          >
                            <Image
                              width={28}
                              height={28}
                              src={"/images/delete.png"}
                              alt="Delete"
                            />
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    使用時間　{schedule.startTime} ~ {schedule.endTime}
                  </div>
                  <div className="mt-2">{schedule.memo}</div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
