import { create } from 'zustand'

import { TabsState } from '../../types/state/content'

/*
|-------------------------------------------------------------------------------
| State
|-------------------------------------------------------------------------------
*/

export const useTabsDataStore = create<TabsState>()((_, get) => ({
  getTabData: (searchIndex: number) =>
    get().tabs.find((_, index) => index === searchIndex),
  tabs: [
    { id: crypto.randomUUID(), title: 'Tab with title #1' },
    { id: crypto.randomUUID(), title: 'Tab with title #2' },
    { id: crypto.randomUUID(), title: 'Tab with title #3' },
    { id: crypto.randomUUID(), title: 'Tab with title #4' },
    { id: crypto.randomUUID(), title: 'Tab with title #5' },
    { id: crypto.randomUUID(), title: 'Tab with title #6' },
    { id: crypto.randomUUID(), title: 'Tab with title #7' },
    { id: crypto.randomUUID(), title: 'Tab with title #8' },
    { id: crypto.randomUUID(), title: 'Tab with title #9' },
  ],
}))
