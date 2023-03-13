import React from 'react';
import classes from './MainPage.module.scss'
import BannerImage from 'shared/accets/image/banner.svg';


const MainPage = () => {
  return (
    <div className={classes.Main}>
      <div>
        <h1 className={classes.title}>Find all your favorite character</h1>
        <h1 className={classes.subtitle}>Find all your favorite character</h1>
        <p>You can find out all the information about your favorite characters</p>
        <button>
          See more...
        </button>
      </div>
      <BannerImage />
    </div>
  );
};

export default MainPage;
