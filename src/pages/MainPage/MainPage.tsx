import React from 'react';
import BannerImage from 'shared/accets/image/banner.svg';
import { useNavigate } from 'react-router-dom';
import classes from './MainPage.module.scss';

export const MainPage = () => {
  const navigate = useNavigate();

  const redirectCardPage = () => {
    navigate('/card');
  };

  return (
    <div className={classes.Main}>
      <div className={classes.content}>
        <div>
          <h1 className={classes.title}>Find all your favorite character</h1>
          <p className={classes.subtitle}> You can find out all the information about your favorite characters</p>
          <button
            type="button"
            className={classes.button}
            onClick={redirectCardPage}
          >
            See more...
          </button>
        </div>
        <BannerImage />
      </div>
    </div>
  );
};
