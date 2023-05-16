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
          toast.success("회원가입 성공!", {
            duration: 2000,
            position: "bottom-left",
          });
          inputReset();
          toggleVariant();
        } else {
          toast.error("회원가입 실패!", {
            duration: 2000,
            position: "bottom-left",
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
        console.log(result);
        if (result.success) {
          toast.success("로그인 성공!", {
            duration: 1500,
            position: "bottom-left",
          });
          localStorage.setItem("USER", result.token);
          router.push("/home");
        } else {
          toast.error("아이디 또는 비밀번호가 다릅니다!", {
            duration: 2000,
            position: "bottom-left",
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
                required
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="text-white focus:ring-2 bg-gray-800 focus:ring-gray-300 block w-full rounded-md py-2 px-3 mb-5"
              />
            )}
            <input
              required
              type="text"
              placeholder="Login ID"
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
              className="text-white focus:ring-2 bg-gray-800 focus:ring-gray-300 block w-full rounded-md py-2 px-3 mb-5"
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={loginPw}
              onChange={(e) => {
                setLoginPw(e.target.value);
              }}
              className="text-white focus:ring-2 bg-gray-800 focus:ring-gray-300 block w-full rounded-md py-2 px-3 mb-5"
            />
            <div className="text-center">
              <button
                type="submit"
                className="hover:bg-gray-400 bg-gray-900 text-gray-300 hover:text-black px-4 py-2 mt-3 rounded-md"
              >
                {variant === "LOGIN" ? "로그인" : "회원가입"}
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
          <div className="text-white">
            {variant === "LOGIN" ? "회원이 아니신가요?" : "계정이 있으신가요?"}
          </div>
          <div
            onClick={toggleVariant}
            className="text-white hover:text-sky-400 cursor-pointer"
          >
            {variant === "LOGIN" ? "회원가입" : "로그인"}
          </div>
        </div>
      </div>
    </>
  );
}
