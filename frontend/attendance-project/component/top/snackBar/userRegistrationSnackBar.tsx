"use client"

import { UserStore } from "@/stores/user/userStore";
import { Alert, Snackbar } from "@mui/material";

// ユーザー新規登録後のメッセージを表示
export const UserRegistrationSnackBar = () => {
  // ストアから取得
  const userRegistrationMessage = UserStore((state) => state.userRegistrationMessage);
  const setUserRegistrationMessage = UserStore((state) => state.setUserRegistrationMessage);

  return (
    <Snackbar
      open={userRegistrationMessage.result !== null}
      autoHideDuration={3000}
      onClose={
        () => setUserRegistrationMessage({
          message: null,
          result: null
        })
      }
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>
      <Alert severity={userRegistrationMessage.result ? "success" : "error"}>
        {userRegistrationMessage.message}
      </Alert>
    </Snackbar>
  )
};