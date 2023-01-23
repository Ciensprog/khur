import { ContentLayout } from './layouts'
import { TabNavigation } from './components/navigations/TabNavigation'

import { useHotkeysToChangeTab } from './hooks/hotkeys'

/*
|-------------------------------------------------------------------------------
| Layout
|-------------------------------------------------------------------------------
*/

export function App() {
  useHotkeysToChangeTab()

  return (
    <>
      <TabNavigation />
      <ContentLayout />
    </>
  )
}
