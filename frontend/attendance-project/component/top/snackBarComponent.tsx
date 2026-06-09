"use client"

import { UserStore } from "@/stores/user/userStore";
import { Alert, Snackbar } from "@mui/material";

// 出勤・退勤・休憩開始・休憩終了ボタン押下後に処理が成功するとスナックバーを表示
export const SnackBarComponent = () => {
  // ストアから取得
  // 空文字（falsyな値）じゃなかった場合、snackbarを表示
  const alertMessage = UserStore((state) => state.alertMessage);

  return (
    <>
      {alertMessage && (
        <Snackbar
          open={
            alertMessage.result === "success" || alertMessage.result === "error"
          }
          autoHideDuration={3000}
          message={alertMessage.message}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}>
          <Alert
            severity={alertMessage.result === "success" ? "success" : "error"} />
        </Snackbar>
      )}
    </>
  )
};