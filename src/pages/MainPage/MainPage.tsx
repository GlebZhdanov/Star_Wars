import React, { useEffect } from 'react';
import BannerImage from 'shared/accets/image/banner.svg';
import classes from './MainPage.module.scss';

const MainPage = () => (
  <div className={classes.Main}>
    <div className={classes.content}>
      <div>
        <h1 className={classes.title}>Find all your favorite character</h1>
        <p className={classes.subtitle}> You can find out all the information about your favorite characters</p>
        <button type="button" className={classes.button}>
          See more...
        </button>
      </div>
      <BannerImage />
    </div>
  </div>
);

export default MainPage;
