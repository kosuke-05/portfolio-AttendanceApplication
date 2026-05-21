"use client"

import { UserType } from "@/types/user/userType";

// 登録処理
export const UserPostApi = async (data: UserType) => {
  const res = await fetch("http://127.0.0.1:3001/user/post", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
};