import { TabItemProps } from '../../../../types'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function TabItem({ active, index, onClick, title }: TabItemProps) {
  return (
    <div
      className={`tabnav-tab border-t border-x flex flex-shrink-0 gap-4 max-w-[12rem] px-4 py-3 rounded-t text-xs ${
        active
          ? 'bg-black-600 border-gray-400/20 sticky left-0 right-0'
          : 'border-transparent'
      }`}
      onClick={onClick}
      role="tab"
    >
      <span className="index font-medium">{index}</span>
      <span className="title overflow-hidden text-ellipsis whitespace-nowrap min-w-[6rem]">
        {title !== '' ? title : ''}
      </span>
    </div>
  )
}
