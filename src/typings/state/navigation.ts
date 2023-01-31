/*
|-------------------------------------------------------------------------------
| Typings
|-------------------------------------------------------------------------------
*/

export type TabIndexValues = number | null

export type TabNavState = {
  changeTab: (tabIndex: TabIndexValues) => void
  currentTabIndex: TabIndexValues
}
