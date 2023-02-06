import React from 'react';
import { Routes as Switch , Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

export function Routes(){
  return(
    <Switch>
      <Route index element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Switch>
  )
}