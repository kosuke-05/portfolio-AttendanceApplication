"use client"

import Box from "@mui/material/Box";
import { StampButtons } from "./stampButtons";
import { WorkStartPostHook } from "@/hooks/attendance/workStartPostHook";
import { WorkFinishPostHook } from "@/hooks/attendance/workFinishPostHook";
import { AttendanceStatusType, LateType } from "@/types/top/topTypes";
import { BreakStartPostHook } from "@/hooks/attendance/breakStartPostHook";
import { BreakFinishPostHook } from "@/hooks/attendance/breakFinishPostHook";
import { LateWorkStartPostHook } from "@/hooks/late/workStartPostHook";
import { SubmitHandler } from "react-hook-form";
import { LateWorkFinishPostHook } from "@/hooks/late/workFinishPostHook";
import { AttendanceSnackBarComponent } from "./snackBar/attendanceSnackBar";
import { LoginDialog } from "../user/login/loginDialog";
import { LoginUserType } from "@/types/user/userType";
import { UserLoginHook } from "@/hooks/user/login/userLoginHook";
import { LoginSnackBar } from "./snackBar/loginSnackBar";
import { UserStore } from "@/stores/user/userStore";
import { UserRegistrationSnackBar } from "./snackBar/userRegistrationSnackBar";

// トップページのロジックコンポーネント
export const TopLogicComponent = () => {
  /**
   * ①出勤時のhooks呼び出し
   * ②退勤時のhooks呼び出し
   */
  const workStartHook = WorkStartPostHook();
  const workFinishHook = WorkFinishPostHook();
  const breakStartHook = BreakStartPostHook();
  const breakFinishHook = BreakFinishPostHook();
  const lateWorkStartHook = LateWorkStartPostHook();
  const lateWorkFinishHook = LateWorkFinishPostHook();
  const userLoginHook = UserLoginHook();

  // ストアから取得
  const attendanceStatus = UserStore((state) => state.attendanceStatus);
  const setAttendanceStatus = UserStore((state) => state.setAttendanceStatus);

  /**
   * 出勤・退勤ボタン押下後の処理
   * ①出勤・退勤いずれかによって処理を分岐
   * ②出勤の場合、
   * ・hooks層を呼び出す
   * ・attendanceStatusにwork_startを渡す
   *
   * ●共通項
   * ①ストアからattendanceStatusを取得して、オブジェクトのプロパティ値にtrueを渡す
   */
  const branchAttendanceStatus = (status: Exclude<AttendanceStatusType, "none">) => {

    // 要修正
    switch(status) {
      case "work_start":
        setAttendanceStatus({
          workStart: true,
          workFinish: false,
          breakStart: false,
          breakFinish: false
        })
        workStartHook.mutate();
        break;

      case "work_finish":
        setAttendanceStatus({
          workStart: true,
          workFinish: true,
          breakStart: true,
          breakFinish: true
        })
        workFinishHook.mutate();
        break;

      case "break_start":
        setAttendanceStatus({
          workStart: true,
          workFinish: false,
          breakStart: true,
          breakFinish: false
        })
        breakStartHook.mutate();
        break;

      case "break_finish":
        setAttendanceStatus({
          workStart: true,
          workFinish: false,
          breakStart: true,
          breakFinish: true
        })
        breakFinishHook.mutate();
        break;
    }
  };

  // 遅刻理由記入後の送信処理
  const lateReasonSubmit: SubmitHandler<LateType> = (lateReason) => {
    if(attendanceStatus.workStart) {
      lateWorkStartHook.mutate(lateReason);
    } else if(attendanceStatus.workFinish) {
      lateWorkFinishHook.mutate(lateReason);
    }
  };

  /**
   * ログイン情報入力後の処理
   * ①hooksにメールアドレス・パスワードを渡す
   * ②API通信開始
   * ③バックエンド側に渡されたメールアドレス・パスワードがDBにあるかどうかを判定
   * ④存在すれば取得、無ければスナックバーでメッセージを表示
   */
  const loginUserSubmit: SubmitHandler<LoginUserType> = (data) => {
    userLoginHook.mutate(data);
  }

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
        <StampButtons
          branchAttendanceStatus={branchAttendanceStatus}
          lateReasonSubmit={lateReasonSubmit}
          attendanceStatus={attendanceStatus} />

        <LoginDialog
          loginUserSubmit={loginUserSubmit} />
      </Box>

      {/** ボタン押下後に処理が成功した際にスナックバーを表示 */}
      <AttendanceSnackBarComponent />

      {/** ユーザー新規登録の失敗メッセージの表示 */}
      <UserRegistrationSnackBar />

      {/** ログインの成功・失敗の結果を表示 */}
      <LoginSnackBar />
    </>
  )
};