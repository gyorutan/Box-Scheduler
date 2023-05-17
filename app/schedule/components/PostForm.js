"use client";

import { getUserToken } from "@/app/hooks/getUserToken";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function PostForm() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [memo, setMemo] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = getUserToken();
    setUser(currentUser._id);
  }, []);

  const handleReset = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setMemo("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { user, date, startTime, endTime, memo };
    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
    if (result.success) {
      toast.success("保存できました！", {
        duration: 2000,
      });
      router.push("/home");
    }
  };

  return (
    <>
      <form className="mt-16 px-8" onSubmit={handleSubmit}>
        <p>使用日</p>
        <input
          required
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md w-full md:w-1/3 lg:w-1/3 py-3 px-3 mt-1 mb-5"
        />
        <p>スタート</p>
        <input
          required
          type="time"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md w-full md:w-1/3 lg:w-1/3 py-3 px-3 mt-1 mb-5"
        />
        <p>終了</p>
        <input
          required
          type="time"
          placeholder="시간 설정"
          value={endTime}
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full md:w-1/3 lg:w-1/3 py-3 px-3 mt-1 mb-5"
        />
        <p>メモ</p>
        <input
          type="text"
          placeholder="なんか書いといてね"
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full md:w-1/3 lg:w-1/3 py-3 px-3 mt-1 mb-5"
          style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
        />
        <div className="flex gap-2 justify-end md:justify-start lg:justify-start">
          <div>
            <button
              onClick={() => {
                handleReset();
              }}
              type="button"
              className="text-black bg-gray-300 hover:text-white rounded-md px-4 py-2 mt-3"
            >
              リセット
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-black bg-gray-300 hover:text-white rounded-md px-4 py-2 mt-3"
            >
              保存
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
