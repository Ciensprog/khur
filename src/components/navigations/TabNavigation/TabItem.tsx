import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

type TabItemProps = {
  index: number
  title: string
}

export function TabItem({ index, title }: TabItemProps) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={`tab flex-shrink-0 outline-none px-1 ${
            selected ? 'active rounded-t-' : 'opacity-60'
          }`}
        >
          <div className={`flex gap-4 items-center px-4 py-3`}>
            <span className="font-bold text-xs text-slate-200">{index}</span>
            <span className="text-xs">{title}</span>
          </div>
        </div>
      )}
    </Tab>
  )
}
