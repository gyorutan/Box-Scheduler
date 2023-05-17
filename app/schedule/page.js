import React from "react";
import PostForm from "./components/PostForm";
import Header from "../components/Header";

export default function Schedule() {
  const label = "スケジュール作成"
  return (
    <div className="h-full">
      <Header label={label}/>
      <PostForm />
    </div>
  );
}
