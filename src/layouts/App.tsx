import { TabNavigation } from '../components/navigations/TabNavigation'

import { useTabNavStore, useTabsDataStore } from '../state'

/*
|-------------------------------------------------------------------------------
| Layout
|-------------------------------------------------------------------------------
*/

export function App() {
  const currentTabIndex = useTabNavStore((state) => state.currentTabIndex)
  const getTabData = useTabsDataStore((state) => state.getTabData)
  const tabData = getTabData(currentTabIndex)

  return (
    <>
      <TabNavigation />

      <div className="border-t border-gray-400/20 -mt-[1px]">
        {tabData?.title ?? ''}
      </div>
    </>
  )
}
