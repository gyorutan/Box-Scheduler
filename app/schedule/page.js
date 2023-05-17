import React from "react";

export default function Schedule() {
  return (
    <div className="p-3">
      <div className="text-xl">스케쥴 작성</div>
      <form className="mt-3">
        <input
          required
          type="text"
          placeholder="사용할 날짜"
          // value={loginId}
          // onChange={(e) => {
          //   setLoginId(e.target.value);
          // }}
          className="text-white bg-[#1e2f58] block w-full rounded-md py-2 px-3 mb-5"
        />
        <input
          required
          type="text"
          placeholder="시간 설정"
          // value={loginId}
          // onChange={(e) => {
          //   setLoginId(e.target.value);
          // }}
          className="text-white bg-[#1e2f58] block w-full rounded-md py-2 px-3 mb-5"
        />
        <div className="text-right lg:text-left">
          <button className="hover:bg-gray-200 bg-[#1e2f58] text-gray-200 hover:text-black px-4 py-2 mt-3 rounded-md">
            저장
          </button>
        </div>
      </form>
    </div>
  );
}
