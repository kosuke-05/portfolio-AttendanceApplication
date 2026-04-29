"use client"

import { UserSelectBoxType } from "@/types/user/userType";
import FormControl from "@mui/material/FormControl";
import { Controller, useFormContext } from "react-hook-form";
import { Select, MenuItem, InputLabel, FormHelperText } from "@mui/material"

// 部署名を選択するフォーム
export const UserSelectBox = ({
  name,
  label,
  departmentNameArray
}: UserSelectBoxType) => {
  // RHFから取得
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState}) => (
        <FormControl
          error={fieldState.invalid}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} displayEmpty>
            <MenuItem value="">以下から選択して下さい</MenuItem>
            {departmentNameArray.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )} />
  )
};