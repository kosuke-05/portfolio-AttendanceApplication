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
  const setUserRegistrationMessage = UserStore((state) => state.setUserRegistrationMessage);

  return useMutation({
    mutationFn: UserPostApi,

    /**
     * ①キャッシュの再フェチ
     * ②ストアにユーザー情報を渡す
     * ③localstorageにトークンを渡す
     */
    onSuccess: (res) => {
      // queryClient.invalidateQueries({ queryKey: ["users"] });
      setLoginUser(res.result.user);
      setToken(res.token);

      console.log(res.message);
      console.log(`ユーザー：${res.result.user.name}`);
      
      setUserRegistrationMessage({
        message: res.message,
        result: true
      })
    },

    onError: (err) => {
      if(err instanceof Error) {
        setUserRegistrationMessage({
          message: err.message,
          result: false
        });
      }
    }
  });
};