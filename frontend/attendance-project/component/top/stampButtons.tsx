"use client"

import { ButtonsPropsType } from "@/types/top/topTypes";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// 打刻ボタンを表示するコンポーネント
export const StampButtons = ({
  attendanceArray,
  breakArray
}: ButtonsPropsType) => {

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
        {attendanceArray.map((item) => (
          <Button
            key={item}
            variant="contained"
            sx={{
              width: "300px",
              height: "200px",
              fontSize: "30px",
              bgcolor: "#3399FF"
            }}>
            {item}
          </Button>
        ))}
      </Stack>

      <Stack
        direction="row"
        spacing={4}>
        {breakArray.map((item) => (
          <Button
            key={item}
            variant="contained"
            sx={{
              width: "300px",
              height: "80px",
              fontSize: "20px"
            }}>
            {item}
          </Button>
        ))}
      </Stack>
      <Button
        variant="text"
        sx={{
          alignItems: "center"
        }}>
        新規登録が未完了の方はこちら
      </Button>
    </Stack>
  )
};