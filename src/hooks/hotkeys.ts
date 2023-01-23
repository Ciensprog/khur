import { useHotkeys } from '@mantine/hooks'
import { useCallback } from 'react'
import { shallow } from 'zustand/shallow'

import { useTabNavStore, useTabsDataStore } from '../state'

/*
|-------------------------------------------------------------------------------
| Hook
|-------------------------------------------------------------------------------
*/

export function useHotkeysToChangeTab() {
  const { changeTab, currentTabIndex } = useTabNavStore(
    (state) => ({
      currentTabIndex: state.currentTabIndex,
      changeTab: state.changeTab,
    }),
    shallow
  )
  const getTabData = useTabsDataStore((state) => state.getTabData)

  const onChangeTab = useCallback(
    (tabIndex: number) => () => {
      const getNextTabData = getTabData(tabIndex)

      if (currentTabIndex === tabIndex || !getNextTabData) {
        return
      }

      changeTab(tabIndex)
    },
    [currentTabIndex]
  )

  useHotkeys([
    ['mod + 1', onChangeTab(0)],
    ['mod + 2', onChangeTab(1)],
    ['mod + 3', onChangeTab(2)],
    ['mod + 4', onChangeTab(3)],
    ['mod + 5', onChangeTab(4)],
    ['mod + 6', onChangeTab(5)],
    ['mod + 7', onChangeTab(6)],
    ['mod + 8', onChangeTab(7)],
    ['mod + 9', onChangeTab(8)],
  ])

  return null
}
