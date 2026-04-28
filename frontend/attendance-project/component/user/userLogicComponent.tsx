"use client"

import { UserType } from "@/types/user/userType";
import { UserTextField } from "./userTextField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidations } from "@/schemas/userSchema";
import { UserSelectBox } from "./userSelectBox";
import { Box, Stack, Typography } from "@mui/material";
import { UserRegistrationButton } from "./userButtons";

// ユーザー関連のロジックコンポーネント
export const UserLogicComponent = () => {
  // RHF
  const methods = useForm<UserType>({
    mode: "onChange",
    resolver: zodResolver(UserValidations),
    defaultValues: {
      name: "",
      departmentName: "",
      mailAddress: "",
      password: ""
    }
  });

  /**
   * 新規登録ボタン押下後の処理
   */
  const registrationStart = () => {

  }

  return (
    <FormProvider {...methods}>
      <Box
        component="div"
        sx={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh"
        }}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(registrationStart)}
          sx={{
            width: "400px"
          }}>
          <Stack
            direction="column"
            spacing={1} >
            <Typography variant="h6">新規登録フォーム</Typography>
            <UserTextField
              name="name"
              label="社員名"
              placeholder="山田 太郎" />
            <UserSelectBox
              name="departmentName"
              label="部署名"
              departmentNameArray={[
                {name: "総務部", value: "generalAffairs"},
                {name: "開発部", value: "development"},
                {name: "経理部", value: "accounting"},
                {name: "営業部", value: "sales"}
              ]} />
            <UserTextField
              name="mailAddress"
              label="メールアドレス"
              placeholder="sample@gmail.com" />
            <UserTextField
              name="password"
              label="パスワード"
              placeholder="8桁以上・小文字・大文字・数字含む" />
            <UserRegistrationButton />
          </Stack>
        </Box>
      </Box>
    </FormProvider>
  )
};