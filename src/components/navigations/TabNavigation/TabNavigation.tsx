import { ScrollArea } from '@mantine/core'

import { TabItem } from './TabItem'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function TabNavigation() {
  return (
    <div className="tab-navigation bg-black-800 flex items-center pt-2- px-2 z-10">
      <div className="pl-4 pr-5 hidden"></div>

      <ScrollArea type="never" className="overflow-x-auto-">
        <nav
          className="tabnav-tabs flex gap-2- -mb-[1px]- pt-2 relative text-white max-w-[100vw]"
          aria-label="Tab navigation"
          role="tablist"
        >
          <TabItem title="Tab with title 1" index={1} />
          <TabItem title="Tab with title 2" index={2} active />
          <TabItem title="Tab with title 3" index={3} />
          <TabItem title="Tab with title 4" index={4} />
          <TabItem title="Tab with title 5" index={5} />
          <TabItem title="Tab with title 6" index={6} />
          <TabItem title="Tab with title 7" index={7} />
          <TabItem title="Tab with title 8" index={8} />
          <TabItem title="Tab with title 9" index={9} />
        </nav>
      </ScrollArea>

      <div className="pl-5 pr-4 hidden" />
    </div>
  )
}
