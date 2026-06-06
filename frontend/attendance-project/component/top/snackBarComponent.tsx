"use client"

import { UserStore } from "@/stores/user/userStore";
import { Alert, Snackbar } from "@mui/material";

// 出勤・退勤・休憩開始・休憩終了ボタン押下後に処理が成功するとスナックバーを表示
export const SnackBarComponent = () => {
  // ストアから取得
  const alertMessage = UserStore((state) => state.alertMessage);

  return (
    <Snackbar
      open
      autoHideDuration={3000}
      message={alertMessage}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>
      <Alert
        severity="success"
        sx={{
          // width: "100%"
        }} />
    </Snackbar>
  )
};