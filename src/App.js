import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Account from './components/auth/Account/Account';
import Admin from './components/auth/Admin/Admin';
import SignIn from './components/auth/SignIn/SignIn';
import SignOut from './components/auth/SignOut/SignOut';
import SignUp from './components/auth/SignUp/SignUp';

import * as ROUTES from './constants/routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          {/* <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.ADMIN} component={Admin} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
          <Route path={ROUTES.SIGNOUT} component={SignOut} />
          <Route path={ROUTES.SignUp} component={SignUp} /> */}
        </div>
      </Router>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
