"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { getUserToken } from "@/app/hooks/getUserToken";

export default function AuthForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [variant, setVariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = getUserToken();
    if (user) {
      router.push("/home");
    }
  }, []);

  const inputReset = () => {
    if (variant === "REGISTER") {
      setUsername("");
      setLoginId("");
      setLoginPw("");
    }
    if (variant === "LOGIN") {
      setLoginId("");
      setLoginPw("");
    }
  };

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      inputReset();
      setVariant("REGISTER");
    } else {
      inputReset();
      setVariant("LOGIN");
    }
  }, [variant]);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (variant === "REGISTER") {
      try {
        const formData = { username, loginId, loginPw };
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.success) {
          toast.success("登録できますた!", {
            duration: 2000,
          });
          inputReset();
          toggleVariant();
        } else {
          toast.error("登録できませんでした!", {
            duration: 2000,
          });
          inputReset();
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    if (variant === "LOGIN") {
      try {
        const formData = { loginId, loginPw };
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        // console.log(result);
        if (result.success) {
          toast.success("ログイン成功!", {
            duration: 1500,
          });
          localStorage.setItem("USER", result.token);
          router.push("/home");
        } else {
          toast.error("ログアウト情報が一致しません!", {
            duration: 2000,
          });
          inputReset();
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className="
          px-4
          py-8
          sm:rounded-lg
          sm:px-10
        "
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {variant === "REGISTER" && (
              <input
                disabled={isLoading}
                required
                type="text"
                placeholder="ハンドルネーム"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
                style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
              />
            )}
            <input
              disabled={isLoading}
              required
              type="text"
              placeholder="Login ID"
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
              className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
              style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
            />
            <input
              disabled={isLoading}
              required
              type="password"
              placeholder="Password"
              value={loginPw}
              onChange={(e) => {
                setLoginPw(e.target.value);
              }}
              className="text-black bg-gray-200 placeholder:text-gray-400 rounded-md block w-full py-2 px-3 mb-5"
              style={{ boxShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)" }}
            />
            <div className="text-center">
              <button
                disabled={isLoading}
                type="submit"
                className="text-black bg-gray-300 hover:text-white rounded-md px-4 py-2 mt-3"
              >
                {variant === "LOGIN" ? "ログイン" : "登録"}
              </button>
            </div>
          </form>
        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            px-2 
            text-gray-500
          "
        >
          <div className="text-black">
            {variant === "LOGIN" ? "アカウントを持ってない方" : "アカウントを持っている方"}
          </div>
          <div
            onClick={toggleVariant}
            className="text-black hover:text-[#9BA4B5] cursor-pointer"
          >
            {variant === "LOGIN" ? "新規登録" : "ログイン"}
          </div>
        </div>
      </div>
    </>
  );
}
