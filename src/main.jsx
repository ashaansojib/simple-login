import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './components/providers/AuthProvider.jsx'
import SingIn from './components/Singin/SingIn.jsx'
import Register from './components/register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SingIn></SingIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
