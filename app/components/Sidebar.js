"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { getUserToken } from "../hooks/getUserToken";
import { useEffect, useState } from "react";

const Sidebar = () => {
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
    <div className="flex flex-col h-screen lg:w-60 md:w-40 w-20 bg-[#1e2f58] text-gray-100">
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
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Link href={"/home"}>
            <div className="px-4 py-3 hover:bg-[#6dc4db] flex justify-center gap-2 items-center md:justify-end">
              <span className="hidden lg:block">홈페이지</span>
              <Image height="30" width="30" src="/images/home.png" alt="Logo" />
            </div>
          </Link>
          <Link href={"/schedule"}>
            <div className="px-4 py-3 hover:bg-[#6dc4db] flex justify-center gap-2 items-center md:justify-end">
              <span className="hidden lg:block">스케쥴</span>
              <Image height="30" width="30" src="/images/schedule.png" alt="Logo" />
            </div>
          </Link>
        </div>
        <div>
          <Link href={`user/${currentUser._id}`}>
            <div className="px-4 py-3 hover:bg-[#6dc4db] flex justify-center items-center">
              <div className="hidden">
                <p>{currentUser.username}</p>
              </div>
              <div className="">
                <div className="rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11 lg:ml-28">
                  <Image
                    width={50}
                    height={50}
                    src={currentUser?.image || "/images/placeholder.jpg"}
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          </Link>
          <button
            onClick={logout}
            className="w-full px-4 py-3 hover:bg-[#6dc4db] flex justify-center md:justify-end items-center gap-2"
          >
            <span className="hidden md:block md:text-sm">로그아웃</span>
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