"use client"

import { LoginUserType } from "@/types/user/userType";
import { fetchWithAuth } from "../fetchWithAuth";

export const UserLoginApi = async (loginData: LoginUserType) => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/user/login", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(loginData)
  });

  return res.json();
};