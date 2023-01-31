import { Outlet, RootRoute } from '@tanstack/react-router'

import { TabNavigation } from '../../components/navigations/TabNavigation'

/*
|-------------------------------------------------------------------------------
| Router Layout
|-------------------------------------------------------------------------------
*/

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <TabNavigation />
      <Outlet />
    </>
  ),
})
