import React from 'react'
import ReactDOM from 'react-dom/client'
import mainRoutes from './routes/mainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { UserProvider } from './services/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={mainRoutes} />
    </UserProvider>
  </React.StrictMode>
)
