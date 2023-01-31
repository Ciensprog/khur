import { ScrollArea } from '@mantine/core'

import { useTabNavStore, useTabsDataStore } from '@/state'

import { TabItem } from './TabItem'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function TabNavigation() {
  const currentTabIndex = useTabNavStore((state) => state.currentTabIndex)
  const changeTab = useTabNavStore((state) => state.changeTab)
  const tabs = useTabsDataStore((state) => state.tabs)

  return (
    <div className="tab-navigation bg-black-800 flex items-center px-2 z-10 select-none">
      <div className="pl-4 pr-5 hidden"></div>

      <ScrollArea type="never" className="max-w-screen">
        <nav
          className="tabnav-tabs flex pt-2 relative text-white"
          aria-label="Tab navigation"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <TabItem
              active={index === currentTabIndex}
              index={index}
              key={tab.id}
              onClick={() => changeTab(index)}
              title={tab.title}
            />
          ))}
        </nav>
      </ScrollArea>

      <div className="pl-5 pr-4 hidden"></div>
    </div>
  )
}
