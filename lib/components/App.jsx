import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Splash from './splash/splash';

const App = () => (
  <MuiThemeProvider>
    <div>
      {/* <Route path="/" component={NavBarContainer} /> */}
      <Route exact path="/" component={Splash} />
      {/* <Route exact path="/" component={Home} />
      <ProtectedRoute exact_path="/homepage" component={HomePage} /> */}
    </div>
  </MuiThemeProvider>
);

export default App;