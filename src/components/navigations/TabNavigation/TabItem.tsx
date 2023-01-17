import { TabItemProps } from '../../../types'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function TabItem({ active, index, title }: TabItemProps) {
  return (
    <div
      className={`tabnav-tab flex flex-shrink-0 gap-4 max-w-[12rem] px-4 py-3 rounded-t text-xs w-full- ${
        active
          ? 'bg-black-600 border-gray-400/20 border-t border-x sticky left-0 right-0'
          : ''
      }`}
      role="tab"
    >
      <span className="index font-medium">{index}</span>
      <span className="title overflow-hidden text-ellipsis whitespace-nowrap">
        {title !== '' ? title : `Tab #${index}`}
      </span>
    </div>
  )
}
