import { RouterProvider } from '@tanstack/react-router'

import { useHotkeysToChangeTab } from '@/hooks/hotkeys'

import { router } from './router'

/*
|-------------------------------------------------------------------------------
| Layout
|-------------------------------------------------------------------------------
*/

export function App() {
  useHotkeysToChangeTab()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
