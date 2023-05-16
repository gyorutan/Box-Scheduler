import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function Header() {
  return (
    <div className="border-b-[1px] border-neutral-800 p-3">
      <div className="flex flex-row items-center gap-2">
        <BiArrowBack
          size={20}
          className="
              cursor-pointer 
              hover:bg-gray-300
              transition
          "
        />
        <h1 className="text-white text-xl font-semibold">헤더이름</h1>
      </div>
    </div>
  );
}
