import Aliens from 'shared/accets/image/inoplanets.svg';
import React from 'react';
import classes from './CardPopup.module.scss';

export const CardPopup = () => (
  <>
    <div className={classes.card_content_image}>
      <Aliens className={classes.image} />
      <ul className={classes.enum}>
        <li className={classes.enum_floor}>male</li>
        <li className={classes.enum_type}>19BBY</li>
      </ul>
    </div>
    <div className={classes.card_content}>
      <div className={classes.container}>
        <h3 className={classes.title}>Jabba Desilijic Tiure</h3>
        <div className={classes.container_content}>
          <div className={classes.container_subtitle}>
            <p className={classes.subtitle}>hair color: brown: brown</p>
            <p className={classes.subtitle}>skin color - white</p>
          </div>
        </div>
        <div className={classes.list}>
          <ul className={classes.list_container}>
            <li className={classes.number}>100</li>
            <li className={classes.number_title}>height</li>
          </ul>
          <ul className={classes.list_container}>
            <li className={classes.number}>200</li>
            <li className={classes.number_title}>mass</li>
          </ul>
        </div>
      </div>
    </div>
  </>
);
