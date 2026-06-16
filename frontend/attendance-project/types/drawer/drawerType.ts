"use client"

import { ReactNode } from 'react';

// ドロワーメニュー
export type DrawerMenuType = {
  name: string,
  value: string,
  icon?: ReactNode,
  onClick?: () => void
};