import { ReactRouter } from '@tanstack/react-router'

import { rootRoute, welcomeRoute } from './routes'

/*
|-------------------------------------------------------------------------------
| Router
|-------------------------------------------------------------------------------
*/

export const routeTree = rootRoute.addChildren([welcomeRoute])
export const router = new ReactRouter({ routeTree })

/*
|-------------------------------------------------------------------------------
| Typings
|-------------------------------------------------------------------------------
*/

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
