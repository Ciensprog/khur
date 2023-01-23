import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

import './style.css'

/*
|-------------------------------------------------------------------------------
| Root
|-------------------------------------------------------------------------------
*/

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
