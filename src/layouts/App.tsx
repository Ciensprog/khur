import { appWindow } from '@tauri-apps/api/window'
import { Tab } from '@headlessui/react'
import { ScrollArea } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'

import { TabContent, TabItem } from '../components/navigations/TabNavigation'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  const tabnavRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('100vh')

  useEffect(() => {
    const updateWidth = async () => {
      const scaleFactor = await appWindow.scaleFactor()
      const size = await appWindow.innerSize()
      const currentHeight = size.toLogical(scaleFactor)
      const newHeight =
        currentHeight.height - (tabnavRef.current?.clientHeight ?? 0) - 2

      setHeight(`${newHeight}px`)
    }

    updateWidth()

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <>
      <Tab.Group>
        <div className="flex items-center" data-tauri-drag-region>
          <div className="pl-6 pr-6 hidden" data-tauri-drag-region></div>

          <ScrollArea type="never" className="overflow-x-auto">
            <Tab.List
              className="tabnav flex text-white max-w-[100vw]"
              ref={tabnavRef}
              data-tauri-drag-region
            >
              <TabItem title="Tab #1" index={1} />
              <TabItem title="Tab #2" index={2} />
              <TabItem title="Tab #3" index={3} />
              {/* <TabItem title="Tab #4" /> */}
              {/* <TabItem title="Tab #5" /> */}
              {/* <TabItem title="Tab #6" /> */}
              {/* <TabItem title="Tab #7" /> */}
              {/* <TabItem title="Tab #8" /> */}
            </Tab.List>
          </ScrollArea>

          <div className="pl-6 pr-6 hidden" data-tauri-drag-region></div>
        </div>
        <Tab.Panels className="panels" style={{ height }}>
          <TabContent content="Content #1" />
          <TabContent content="Content #2" />
          <TabContent content="Content #3" />
          {/* <TabContent content="Content #4" /> */}
          {/* <TabContent content="Content #5" /> */}
          {/* <TabContent content="Content #6" /> */}
          {/* <TabContent content="Content #7" /> */}
          {/* <TabContent content="Content #8" /> */}
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
