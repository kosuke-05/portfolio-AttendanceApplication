"use client"

import { getToken, removeToken } from "@/lib/auth/token"
import { UserStore } from "@/stores/user/userStore";

// 【共通関数】トークンが有効かどうかで処理を分岐する
export const fetchWithAuth = async (url: string, option: RequestInit = {}) => {
  // トークンの取得
  const token = getToken();

  console.log(`トークン：${token}`);

  // ストアの取得
  const logout = UserStore((state) => state.logout);

  // API通信
  const res = await fetch(url, {
    ...option,
    headers: {
      ...option.headers,
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type" : "application/json"
    },
  });

  /**
   * 401が返ってきた際の処理
   * ①ストア内のユーザー情報を削除
   * ②localstorage内のトークを削除
   * ③ログイン画面に遷移
   */
  if(res.status === 401) {
    removeToken();
    logout();

    // パスが未完成
    window.location.href = "";

    throw new Error("Unauthorized");
  }

  return res;
};