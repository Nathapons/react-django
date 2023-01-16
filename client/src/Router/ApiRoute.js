import React from 'react'
import { BrowserRouter, Routes, Switch, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from '../Pages/MainPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage';
import ContractPage from '../Pages/ContractPage';
import PostPage from '../Pages/PostPage';
import SinglePage from '../Pages/SinglePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
  },
  {
    path: '/post',
    element: <PostPage/>,
  },
  {
    path: '/post/:id',
    element: <SinglePage/>,
  },
])


export default function ApiRoute() {
  return (
    <RouterProvider router={router}/>
  )
}
