import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
<<<<<<< HEAD
      <Navigation onLogout={props.onLogout} />
=======
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
>>>>>>> 57cb3cf438c7ac10cf20f0cdfcef2020105542fb
    </header>
  );
};

export default MainHeader;
