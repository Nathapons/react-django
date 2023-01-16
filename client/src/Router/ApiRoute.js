import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../Pages/MainPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage';
import ContractPage from '../Pages/ContractPage';
import PostPage from '../Pages/PostPage';
import SinglePage from '../Pages/SinglePage';


export default function ApiRoute() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/post" exact component={PostPage} />
            <Route path="/post/:id" exact component={SinglePage} />
        </Switch>
    </BrowserRouter>
  )
}
