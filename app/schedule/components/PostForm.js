"use client";

import React, { useState } from "react";

export default function PostForm() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [memo, setMemo] = useState("");

  const handleReset = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setMemo("");
  };

  const handleSubmit = async () => {
    
  }

  return (
    <>
      <form className="mt-3" onSubmit={handleSubmit}>
        <p>사용할 날짜</p>
        <input
          required
          type="Date"
          placeholder="사용할 날짜"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
          style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
        />
        <p>시작 시간</p>
        <input
          required
          type="time"
          placeholder="시간 설정"
          value={startTime}
          onChange={(e) => {
            setStartTime(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
          style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
        />
        <p>종료 시간</p>
        <input
          required
          type="time"
          placeholder="시간 설정"
          value={endTime}
          onChange={(e) => {
            setEndTime(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
          style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
        />
        <p>메모</p>
        <input
          required
          type="text"
          placeholder="메모 남기기"
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
          className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
          style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
        />
        <div className="flex gap-2 justify-end lg:justify-start">
          <div>
            <button
              onClick={() => {
                handleReset();
              }}
              type="button"
              className="text-black bg-gray-300 hover:text-white rounded-md px-4 py-2 mt-3"
            >
              초기화
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="text-black bg-gray-300 hover:text-white rounded-md px-4 py-2 mt-3"
            >
              저장
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
