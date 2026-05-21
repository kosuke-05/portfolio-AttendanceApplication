"use client"

// トークンのkeyを定義
const TOKEN_KEY = "accessToken";

// トークンのセット
export const setToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

// トークンの取得
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// トークンの削除
export const removeToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};