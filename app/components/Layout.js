"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { getUserToken } from "../hooks/getUserToken";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [label, setLabel] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = getUserToken();
    setCurrentUser(user);
    if (pathname.includes("user")) {
      setLabel(currentUser.username);
    } else {
      setLabel(
        pathname.split("/")[1].charAt(0).toUpperCase() + pathname.slice(2)
      );
    }
  }, [pathname]);

  return (
    <>
      {pathname === "/" ? (
        <>{children}</>
      ) : (
        <>
          <div className="h-full flex">
            <Sidebar />
            <div className="w-full">
              <Header label={label} />
              <main>{children}</main>
            </div>
          </div>
        </>
      )}
    </>
  );
}
