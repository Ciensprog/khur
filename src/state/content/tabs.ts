import { create } from 'zustand'

import { TabsState } from '../../types/state/content'

/*
|-------------------------------------------------------------------------------
| State
|-------------------------------------------------------------------------------
*/

export const useTabsDataStore = create<TabsState>()((_, get) => ({
  getTabData: (searchIndex: number) => get().tabs[searchIndex],
  tabs: [
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #1' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #2' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #3' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #4' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #5' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #6' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #7' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #8' },
    { config: {}, id: crypto.randomUUID(), title: 'Tab with title #9' },
  ],
}))
