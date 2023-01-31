import { create } from 'zustand'

import { TabNavState } from '../../typings/state/navigation'

/*
|-------------------------------------------------------------------------------
| State
|-------------------------------------------------------------------------------
*/

export const useTabNavStore = create<TabNavState>()((set) => ({
  changeTab: (tabIndex) => set(() => ({ currentTabIndex: tabIndex })),
  currentTabIndex: null,
}))
