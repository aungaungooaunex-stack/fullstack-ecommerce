
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import Main from './layouts/Main.tsx'
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.tsx'
import { StrictMode } from 'react'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Main/>,
    children : [
      {
        index : true,
        element : <Home/>
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
