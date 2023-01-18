import { create } from 'zustand'

import { TabNavState } from '../../types/state/navigation'

/*
|-------------------------------------------------------------------------------
| State
|-------------------------------------------------------------------------------
*/

export const useTabNavStore = create<TabNavState>()((set) => ({
  changeTab: (tabIndex: number) => set(() => ({ currentTabIndex: tabIndex })),
  currentTabIndex: 0,
}))
