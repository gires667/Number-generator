import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import './index.css'

import { routeTree } from './routeTree.gen'



// Crée une instance du router
const router = createRouter({ routeTree })

// Render de l'application
const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router}>
        <TanStackRouterDevtools initialIsOpen={false} position="bottom-right" />
      </RouterProvider>
    </StrictMode>
  )
}
