import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Portfolio from '../pages/portfolio';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/portfolio' component={Portfolio}></Route>
    </Routes>
  );
}

export default Main;