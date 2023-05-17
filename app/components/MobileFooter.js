"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { getUserToken } from "../hooks/getUserToken";
import { useEffect, useState } from "react";

export default function MobileFooter() {
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
    <>
      <div className="items-center fixed flex bottom-0 h-12 w-full lg:hidden bg-[#394867]">
        <div className="w-full h-12 items-center flex justify-center hover:bg-[#212A3E]">
          <Link
            href={"/"}
            className="w-full h-12 items-center flex justify-center"
          >
            <Image height="28" width="28" src="/images/home.png" alt="Logo" />
          </Link>
        </div>
        <div className="w-full h-12 items-center flex justify-center hover:bg-[#212A3E]">
          <Link href={"/schedule"} className="w-full h-12 items-center flex justify-center">
            <Image
              height="28"
              width="28"
              src="/images/schedule.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="w-full h-12 items-center flex justify-center hover:bg-[#212A3E]">
          <Link href={`/user/${currentUser._id}`} className="w-full h-12 items-center flex justify-center">
            <Image
              height="28"
              width="28"
              className="rounded-full"
              src={`${currentUser?.image || "/images/placeholder.jpg"}`}
              alt="Logo"
            />
          </Link>
        </div>
        <button onClick={logout} className="w-full h-12 items-center flex justify-center text-white hover:bg-[#212A3E]">
          <div className="w-full h-12 items-center flex justify-center">
            <HiArrowLeftOnRectangle size={30} />
          </div>
        </button>
      </div>
    </>
  );
}

{
  /* <div
className="
  fixed 
  justify-between 
  w-full 
  bottom-0 
  z-40 
  flex 
  items-center 
  bg-white 
  border-t-[1px] 
  lg:hidden
"
>
<div>ㅇㅇ</div>
</div> */
}

{
  /* <div className="fixed w-full flex justify-between items-center bottom-0 lg:hidden bg-[#394867] text-gray-100">
  <div className="w-full justify-center flex">
    <Link href={"/home"}>
      <div className="px-4 py-3 hover:bg-[#212A3E] flex justify-center gap-2 items-center md:justify-end">
        <span className="hidden lg:block">홈페이지</span>
        <Image height="30" width="30" src="/images/home.png" alt="Logo" />
      </div>
    </Link>
  </div>
  <div className="w-full">
    <Link href={"/schedule"}>
      <div className="px-4 py-3 hover:bg-[#212A3E] flex justify-center gap-2 items-center md:justify-end">
        <span className="hidden lg:block">스케쥴 작성</span>
        <Image height="30" width="30" src="/images/schedule.png" alt="Logo" />
      </div>
    </Link>
  </div>
  <div className="w-full">
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
  </div>
  <div className="w-full">
    <button
      onClick={logout}
      className="w-full px-4 py-3 hover:bg-[#212A3E] flex justify-center md:justify-end items-center gap-2"
    >
      <span className="hidden lg:block">로그아웃</span>
      <div>
        <HiArrowLeftOnRectangle size={35} />
      </div>
    </button>
  </div>
</div>; */
}
