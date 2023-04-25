import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import AuthProvider from './components/providers/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
