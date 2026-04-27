"use client"

import { ReactNode } from 'react';

// ドロワーメニュー
export type DrawerMenuType =
  {
    name: string,
    value: string,
    icon: ReactNode,
    onClick?: () => void
  };

// ドロワーメニュー（2階層目）
export type Drawer2LayersType = {
  name: string,
  value: string,
  onClick?: () => void
};