"use client"

import { UserPostApi } from "@/api/userPostApi";
import {useMutation, useQueryClient} from "@tanstack/react-query";

// 登録処理
export const UserPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  });
};