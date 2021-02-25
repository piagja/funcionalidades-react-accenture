import React, { ComponentType } from 'react'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Home from '../pages/home'

import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import { isAuth } from '../services/isAuth';

interface PrivateRouteProps extends RouteProps { 
  component: ComponentType 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={ props => isAuth 
        ? (<Component />) 
        : (<Redirect to={{ pathname: '/', state: { from: props.location} }} />) }
    />
  )

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes