"use client"

import { UserLoginApi } from "@/api/user/login/userLoginApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// ログイン情報入力後の処理
export const UserLoginHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }

  })
};