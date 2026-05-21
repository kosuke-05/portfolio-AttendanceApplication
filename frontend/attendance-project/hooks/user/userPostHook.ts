"use client"

import { UserPostApi } from "@/api/user/userPostApi";
import { setToken } from "@/lib/auth/token";
import { UserStore } from "@/stores/user/userStore";
import {useMutation, useQueryClient} from "@tanstack/react-query";

// 登録処理
export const UserPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  // ストアを取得
  const setLoginUser = UserStore((state) => state.setLoginUser);

  return useMutation({
    mutationFn: UserPostApi,

    /**
     * ①キャッシュの再フェチ
     * ②ストアにユーザー情報を渡す
     * ③localstorageにトークンを渡す
     */
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setLoginUser(res.user);
      setToken(res.token);
    }
  });
};