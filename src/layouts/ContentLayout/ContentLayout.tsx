import { ContentLayoutProps } from '@/typings'

import { Panel } from '@/components/panels'

import { useTabNavStore, useTabsDataStore } from '@/state'

/*
|-------------------------------------------------------------------------------
| Layout
|-------------------------------------------------------------------------------
*/

export function ContentLayout(_: ContentLayoutProps) {
  const currentTabIndex = useTabNavStore((state) => state.currentTabIndex)
  const getTabData = useTabsDataStore((state) => state.getTabData)
  const tabData = getTabData(currentTabIndex)
  const title = tabData?.title ?? ''

  return (
    <div className="border-t border-gray-400/20 -mt-[1px]">
      <Panel>
        <>{title}</>
      </Panel>
      <Panel>
        <>Preview</>
      </Panel>
    </div>
  )
}
