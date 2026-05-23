"use client"

import { UserStore } from "@/stores/user/userStore";
import { ButtonsPropsType } from "@/types/top/topTypes";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

// 打刻ボタンを表示するコンポーネント
export const StampButtons = ({
  branchAttendanceStatus
}: ButtonsPropsType) => {
  // 画面遷移
  const router = useRouter();

  // ストアから取得
  const loginUser = UserStore((state) => state.loginUser);
  const attendanceStatusStore = UserStore((state) => state.attendanceStatus);
  const workStart = UserStore((state) => state.attendanceTime.work_start);

  return (
    <Stack
      direction="column"
      spacing={3}
      component="div">
      <Stack
        direction="row"
        spacing={4}
        sx={{
          alignItems: "center"
        }}>
        <Button
          variant="contained"
          onClick={() => branchAttendanceStatus("work_start")}
          disabled={attendanceStatusStore.work_start}
          sx={{
            width: "300px",
            height: "200px",
            fontSize: "30px",
            bgcolor: "#3399FF"
          }}>
          <Stack
            direction="column"
            sx={{
              alignItems: "center"
            }}>
            <Typography 
              sx={{
                fontSize: "30px",
                fontWeight: "bold"
              }}>
              出勤
            </Typography>
            {workStart && (
              <Typography variant="body2">{workStart}</Typography>
            )}
          </Stack>
        </Button>
        <Button
          variant="contained"
          disabled={
            !attendanceStatusStore.work_start ||
            attendanceStatusStore.work_finish
          }
          sx={{
            width: "300px",
            height: "200px",
            fontSize: "30px",
            bgcolor: "#3399FF"
          }}>
          退勤
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={4}>
        <Button
          variant="contained"
          disabled={
            !attendanceStatusStore.work_start ||
            attendanceStatusStore.work_finish ||
            attendanceStatusStore.break_start
          }
          sx={{
            width: "300px",
            height: "80px",
            fontSize: "20px"
          }}>
          休憩開始
        </Button>
        <Button
          variant="contained"
          disabled={
            !attendanceStatusStore.work_start ||
            attendanceStatusStore.work_finish ||
            !attendanceStatusStore.break_start
          }
          sx={{
            width: "300px",
            height: "80px",
            fontSize: "20px"
          }}>
          休憩終了
        </Button>
      </Stack>
      <Button
        variant="text"
        onClick={() => router.push("/user")}
        disabled={!!loginUser}
        sx={{
          alignItems: "center"
        }}>
        新規登録が未完了の方はこちら
      </Button>
    </Stack>
  )
};