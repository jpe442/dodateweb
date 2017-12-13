import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {cyan200, cyan400,
   lightGreen400, lightGreen200,
   grey100, grey300,
   white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Splash from './splash/splash';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan200,
    primary2Color: cyan400,
    primary3Color: grey300,
    accent1Color: lightGreen400,
    accent2Color: lightGreen200,
    accent3Color: grey100,
    textColor: darkBlack,
    alternateTextColor: white,
    shadowColor: fullBlack,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      {/* <Route path="/" component={NavBarContainer} /> */}
      <Route exact path="/" component={Splash} />
      {/* <Route exact path="/" component={Home} />
      <ProtectedRoute exact_path="/homepage" component={HomePage} /> */}
    </div>
  </MuiThemeProvider>
);

export default App;