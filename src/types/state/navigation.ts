/*
|-------------------------------------------------------------------------------
| Types
|-------------------------------------------------------------------------------
*/

export type TabNavState = {
  changeTab: (tabIndex: number) => void
  currentTabIndex: number
}