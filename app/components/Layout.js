"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" ? (
        <>{children}</>
      ) : (
        <>
          <div className="flex">
            <Sidebar />
            <div>
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </>
      )}
    </>
  );
}
