/*
|-------------------------------------------------------------------------------
| Types
|-------------------------------------------------------------------------------
*/

export type TabItemInfo = {
  id: string
  title: string
}

export type TabsState = {
  getTabData: (index: number) => TabItemInfo | undefined
  tabs: Array<TabItemInfo>
}
