import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {lightBlue400, lightBlue700,
   orange400, orange700,
   grey100, grey400,
   white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Splash from './splash/splash';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue400,
    primary2Color: lightBlue700,
    primary3Color: grey400,
    accent1Color: orange400,
    accent2Color: orange700,
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