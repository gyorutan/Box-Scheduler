import Header from "@/app/components/Header";
import React from "react";
import UserProfile from "./components/UserProfile";

export default function User() {
  return (
    <div className="h-full">
      <Header />
      <UserProfile />
    </div>
  );
}
