"use client"

import { UserStore } from "@/stores/user/userStore";
import { Alert, Snackbar } from "@mui/material";

/**
 * ログインの成功・失敗を表示するスナックバー
 * ①ログインの成功・失敗に関わらず、以下を表示
 * ・成功　→　ログインに成功しました
 * ・失敗　→　ログインに失敗しました。メールアドレスかパスワードに誤りがあります。
 * 
 */
export const LoginSnackBar = () => {
  // ストアから取得
  const loginMessage = UserStore((state) => state.loginMessage);
  const setLoginMessage = UserStore((state) => state.setLoginMessage);

  return (
    <Snackbar
      open={loginMessage.result !== null}
      autoHideDuration={3000}
      message={loginMessage.message}
      onClose={
        () => setLoginMessage({
          message: null,
          result: null
        })
      }
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>
      <Alert
        severity={loginMessage.result ? "success" : "error"} />
    </Snackbar>
  )
};