"use client"

import { DrawerMenuType } from '@/types/drawer/drawerType';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import { UserStore } from '@/stores/user/userStore';
import LogoutIcon from '@mui/icons-material/Logout';

// ドロワーメニュー
export const DrawerComponent = () => {
  const router = useRouter();

  // ドロワーメニューの2階層目の状態管理
  const [openChildMenu, setOpenChildMenu] = useState<boolean>(false);

  // ストアを取得
  const loginUser = UserStore((state) => state.loginUser);
  const logout = UserStore((state) => state.logout);
  const setLoginDialog = UserStore((state) => state.setLoginDialog);

  // ストアでユーザー情報をもっているかの判別
  let userName = loginUser?.name ?? "ゲスト";

  /**
   * メニュー一覧
   * ・ホーム画面
   * → 打刻ボタンを実装（新規登録していないときは、新規登録を促す文言を表示）
   * ・ユーザー
   * ①勤怠情報
   * ②ログインアウト
   * ・ログイン
   * → 一旦ログアウトした利用者のために配置
   * ②ログインを押下後、setLoginDialogにtrueを渡すことでログインダイアログ表示に派生させる
   */
  const DrawerMenu: DrawerMenuType[] = [
    {name: "ホーム", value: "home", icon: <HomeIcon />, onClick: () => {router.push("/")}},
    {name: `${userName} さん`, value: "user", icon: <AccountCircleIcon />},
    ...(loginUser
      ? [{name: "ログアウト", value: "logout", onClick: () => logout(), icon: <LogoutIcon />}]
      : [{name: "ログイン", value: "login", onClick: () => setLoginDialog(true), icon: <LoginIcon />}]
    )
  ];

  const Drawer2LayersMenu: DrawerMenuType[] = [
    {name: "勤怠情報", value: "attendanceInformation", onClick: () => {router.push("/attendanceInformation")}},
  ];

  return (
    <Drawer
      anchor='left'
      variant='permanent'
      sx={{
        "& .MuiDrawer-paper": {
          width: "200px",
          p: 2,
          boxSizing: "border-box"
        }
      }}>
      <List>
        {DrawerMenu.map((item) => (
          <Box key={item.value}>
            <ListItemButton
              key={item.value}
              onClick={
                () => {
                  if(item.value === "user" && !item.onClick) {
                    setOpenChildMenu(!openChildMenu);
                  } else if(item.onClick) {
                    item.onClick();
                  }
                }
              }>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>

            {item.value === "user" && (
              <Collapse in={openChildMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Drawer2LayersMenu.map((item) => (
                    <ListItemButton
                      key={item.value}
                      onClick={item.onClick} >
                      <ListItemText
                        primary={item.name}
                        sx={{
                        "& .MuiTypography-root": {
                          pl: 4,
                          fontSize: "14px"
                        }
                      }} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  )
};