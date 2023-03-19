import React, { FC } from 'react';
import classes from './Loader.module.scss';

export const Loader = () => (
  <div className={`${classes.loading} ${classes.bar}`}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
