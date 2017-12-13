import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/nav_bar_container';
// import { HomePage } from './homepage/homepage'
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

  let drag = document.getElementById('draggable-test');
  console.log(drag);
  $(drag).draggable();
  return (
  <div>

    {/* <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute exact_path="/homepage" component={HomePage} />
    <ProtectedRoute exact_path="/questions/:questionId" component={QuestionDetailContainer} /> */}
  </div>)
};

export default App;