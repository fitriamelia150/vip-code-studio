import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import PageNotFound from './pages/404.jsx'
import ProductsPage from './pages/products.jsx'

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
  },
  {
    path: "/products",
    element: <ProductsPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
