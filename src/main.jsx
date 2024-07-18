import React from 'react'
import ReactDOM from 'react-dom/client'
import mainRoutes from './routes/mainRoutes.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={mainRoutes} />
  </React.StrictMode>
)
