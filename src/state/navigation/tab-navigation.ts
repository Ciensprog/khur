import { create } from 'zustand'

import { TabNavState } from '@/typings'

/*
|-------------------------------------------------------------------------------
| State
|-------------------------------------------------------------------------------
*/

export const useTabNavStore = create<TabNavState>()((set) => ({
  changeTab: (tabIndex) => set(() => ({ currentTabIndex: tabIndex })),
  currentTabIndex: null,
}))
