import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import NGOs from './components/NGOs'
import MyDonations from './components/MyDonations'
import Search from './components/Search'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Chat from './components/Chat'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/NGOs",
        element:<NGOs/>
      },
      {
        path:"/MyDonations",
        element:<MyDonations/>
      },
      {
        path:"/Search",
        element:<Search/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Chat",
        element:<Chat/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App