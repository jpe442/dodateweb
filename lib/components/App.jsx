import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan200, cyan400,
  lightGreen400, lightGreen200,
  grey100, grey300,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import NavBarContainer from './navbar/navbar_container';
import HomePageContainer from './home/home_page_container';
import Splash from './splash/splash';
import SplashContainer from './splash/splash_container';

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

const App = () => {

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Route path="/" component={NavBarContainer} />
        <ProtectedRoute exact_path="/homepage" component={HomePageContainer} />
        <Route exact path="/" component={SplashContainer} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;