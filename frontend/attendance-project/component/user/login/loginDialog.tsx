"use client"

import { LoginValidation } from "@/schemas/userSchema";
import { UserStore } from "@/stores/user/userStore";
import { LoginDialogPropsType, LoginTextFieldType, LoginUserType } from "@/types/user/userType";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Dialog, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { LoginTextField } from "./loginTextField";
import { LoginSubmitButton } from "@/component/lateTextField/buttons";

// ログイン時のメールアドレス・パスワードを入力するダイアログ
export const LoginDialog = ({
  loginUserSubmit
}: LoginDialogPropsType) => {
  // RHFと連携
  const methods = useForm<LoginUserType>({
    mode: "onChange",
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      mailAddress: "",
      password: ""
    }
  });

  // ストアから取得
  const loginDialog = UserStore((state) => state.loginDialog);
  const setLoginDialog = UserStore((state) => state.setLoginDialog);

  const textFieldArray: LoginTextFieldType[] = [
    { name: "mailAddress", placeholder: "○○○@gmail.com", label: "メールアドレス" },
    { name: "password", placeholder: "8桁以上、小文字・大文字含む", label: "パスワード" }
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(loginUserSubmit)}>
        <Dialog
          open={loginDialog}
          onClose={() => {
            setLoginDialog(false);
            methods.reset();
          }}>
          <Stack
            component="div"
            direction="column"
            spacing={1}
            sx={{
              p: 2
            }}>
            {textFieldArray.map((item) => (
              <LoginTextField
                key={item.name}
                name={item.name}
                label={item.label}
                placeholder={item.placeholder} />
            ))}
            <LoginSubmitButton />
          </Stack>
        </Dialog>
      </form>  
    </FormProvider>      
  )
};