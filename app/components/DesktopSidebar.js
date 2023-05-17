"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { getUserToken } from "../hooks/getUserToken";
import { useEffect, useState } from "react";

export default function DesktopSidebar() {
  const [currentUser, setCurrentUser] = useState({});
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
    <div className="fixed left-0 h-full flex-col hidden lg:block lg:w-52 bg-[#394867] text-gray-100">
      <div className="px-4 py-3 font-bold">
        <Link href={"/home"}>
          <div className="flex justify-center gap-2 items-center md:justify-end">
            <div className="hidden lg:block">Box Scheduler</div>
            <div className="md:block">
              <Image
                height="30"
                width="30"
                src="/images/logo3.png"
                alt="Logo"
              />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <Link href={"/home"}>
          <div className="px-4 py-3 hover:bg-[#212A3E] flex justify-center gap-2 items-center md:justify-end">
            <span className="hidden lg:block">ホームページ</span>
            <Image height="30" width="30" src="/images/home.png" alt="Logo" />
          </div>
        </Link>
        <Link href={"/schedule"}>
          <div className="px-4 py-3 hover:bg-[#212A3E] flex justify-center gap-2 items-center md:justify-end">
            <span className="hidden lg:block">スケジュール作成</span>
            <Image
              height="30"
              width="30"
              src="/images/schedule.png"
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      <div>
        <Link href={`/user/${currentUser._id}`}>
          <div className="px-4 py-3 hover:bg-[#212A3E] flex justify-center gap-2 items-center md:justify-end">
            <span className="hidden lg:block">{currentUser.username}</span>
            <Image
              height="30"
              width="30"
              className="rounded-full"
              src={`${currentUser?.image || "/images/placeholder.jpg"}`}
              alt="Logo"
            />
          </div>
        </Link>
        <button
          onClick={logout}
          className="w-full px-4 py-3 hover:bg-[#212A3E] flex justify-center md:justify-end items-center gap-2"
        >
          <span className="hidden lg:block">ログアウト</span>
          <div>
            <HiArrowLeftOnRectangle size={35} />
          </div>
        </button>
      </div>
    </div>
  );
}
