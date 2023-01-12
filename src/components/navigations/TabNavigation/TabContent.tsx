import { Tab } from '@headlessui/react'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

type TabContentProps = {
  content: string
}

export function TabContent({ content }: TabContentProps) {
  return (
    <Tab.Panel className="outline-none p-4">
      <div className="">{content}</div>
    </Tab.Panel>
  )
}
