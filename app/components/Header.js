"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getUserToken } from "../hooks/getUserToken";

export default function Header({ label }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user.username);
  });
  return (
    <div className="fixed top-0 text-xl bg-gray-200 w-full">
      <div className="flex flex-row items-center gap-2">
        <Image
          onClick={() => router.back(-1)}
          src={"/images/arrow.png"}
          width={30}
          height={30}
          alt="<"
          className="
        rounded-full
        cursor-pointer 
        hover:bg-gray-200
        transition
        ml-3
    "
        />
        <h1 className="text-black p-2">
          {pathname.includes("user") ? `${currentUser}` : label}
        </h1>
      </div>
    </div>
  );
}

{
  /* <div className="fixed border-b-2 border-[#1e2f58] p-2">
<div className="flex flex-row items-center gap-2">
  <Image
    onClick={() => router.back(-1)}
    src={'/images/arrow.png'}
    width={30}
    height={30}
    alt="<"
    className="
        rounded-full
        cursor-pointer 
        hover:bg-gray-200
        transition
    "
  />
  <h1 className="text-black text-xl font-bold">{label}</h1>
</div>
</div> */
}
