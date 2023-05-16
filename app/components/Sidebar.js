"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { getUserToken } from "../hooks/getUserToken";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser);
  const router = useRouter();

  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user);
  }, [router]);

  const logout = () => {
    localStorage.removeItem("USER");
    router.push("/");
  };
  return (
    <div className="flex flex-col h-screen lg:w-60 md:w-40 w-20 bg-gray-800 text-white">
      <div className="px-4 py-3 font-bold">
        <Link href={"/home"}>
          <div className="flex justify-center gap-2 items-center md:justify-end">
            <div className="hidden lg:block">Box Scheduler</div>
            <div className="md:block">
              <Image height="30" width="30" src="/images/logo.png" alt="Logo" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Link href={"/home"}>
            <div className="px-4 py-3 hover:bg-gray-700 text-center md:text-end">
              홈
            </div>
          </Link>
          <Link href={"/schedule"}>
            <div className="px-4 py-3 hover:bg-gray-700 text-center md:text-end">
              스케쥴
            </div>
          </Link>
        </div>
        <div>
          <Link href={`user/${currentUser._id}`}>환영합니다 {currentUser.username}님</Link>
          <button
            onClick={logout}
            className="w-full px-4 py-3 hover:bg-gray-700 flex justify-center md:justify-end items-center gap-2"
          >
            <span className="hidden md:block">로그아웃</span>
            <div>
              <HiArrowLeftOnRectangle size={35} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
