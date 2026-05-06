"use client"

import { Drawer2LayersType, DrawerMenuType } from '@/types/drawer/drawerType';
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

// ドロワーメニュー
export const DrawerComponent = () => {
  const router = useRouter();

  // ドロワーメニューの2階層目の状態管理
  const [openChildMenu, setOpenChildMenu] = useState<boolean>(false);

  // ストアを取得
  const loginUser = UserStore((state) => state.loginUser);

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
   */
  const DrawerMenu: DrawerMenuType[] = [
    {name: "ホーム", value: "home", icon: <HomeIcon />, onClick: () => {router.push("/")}},
    {name: `${userName} さん`, value: "user", icon: <AccountCircleIcon />},
    {name: "ログイン", value: "Login", icon: <LoginIcon />}
  ];

  const Drawer2LayersMenu: Drawer2LayersType[] = [
    {name: "勤怠情報", value: "attendanceInformation", onClick: () => {router.push("/attendanceInformation")}},
    {name: "ログアウト", value: "Logout"}
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