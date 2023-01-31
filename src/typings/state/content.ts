/*
|-------------------------------------------------------------------------------
| Typings
|-------------------------------------------------------------------------------
*/

export type TabConfig = {
  //
}

export type TabItemInfo = {
  config: TabConfig
  id: string
  title: string
}

export type TabsState = {
  getTabData: (index: number) => TabItemInfo | undefined
  tabs: Array<TabItemInfo>
}
