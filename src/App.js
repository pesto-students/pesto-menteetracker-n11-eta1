import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import appAuthenticator from "./shared/hoc/appAuthenticator"

import AdminPage from "./features/admin/AdminPage";
import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact  path='/signup' component={SignUp} />
        <Route exact path='/admin' component={AdminPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default appAuthenticator(App);
