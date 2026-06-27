"use client"

import { UserLoginApi } from "@/api/user/login/userLoginApi";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// ログイン情報入力後の処理
export const UserLoginHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  // ストアから取得
  const setLoginUser = UserStore((state) => state.setLoginUser);

  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      setLoginUser(res.user);
    }
  })
};