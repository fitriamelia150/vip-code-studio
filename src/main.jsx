import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import './index.css'
import RegisterPage from './pages/register.jsx'
import PageNotFound from './pages/404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="font-bold">Hello all</div>,
    errorElement: <PageNotFound/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
