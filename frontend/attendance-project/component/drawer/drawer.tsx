"use client"

import { DrawerMenuType } from '@/types/drawerType';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation';

// ドロワーメニュー
export const DrawerComponent = () => {
  const router = useRouter();

  /**
   * メニュー一覧
   * ・ホーム画面
   * → 打刻ボタンを実装（新規登録していないときは、新規登録を促す文言を表示）
   * ・詳細画面
   * → 新規登録済みの社員の勤怠情報を表示
   * ・
   */
  const DrawerMenu: DrawerMenuType[] = [
    {name: "ホーム", icon: <HomeIcon />, onClick: () => {router.push("/")}},
    {name: "詳細", icon: <AccountCircleIcon />, onClick: () => {router.push("/detail")}}
  ];

  return (
    <Drawer
      anchor='left'
      variant='permanent'
      sx={{
        "& .MuiDrawer-paper": {
          width: "200px",
          p: 2
        }
      }}>
      <List>
        {DrawerMenu.map((menu) => (
          <ListItemButton
            key={menu.name}
            onClick={menu.onClick}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
};