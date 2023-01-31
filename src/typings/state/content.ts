import { TabIndexValues } from './navigation'

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
  getTabData: (index: TabIndexValues) => TabItemInfo | undefined
  tabs: Array<TabItemInfo>
}
