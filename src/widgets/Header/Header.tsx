import React from 'react';
import {Sidebar} from "../Sidebar/ui/Sidebar";
import classes from './Header.module.scss'
import HeaderIcon from 'shared/accets/image/icon-header.svg';

export const Header = () => {
  return (
    <div className={classes.Header}>
      <HeaderIcon />
      <div className={classes.content_link}>
        <Sidebar />
      </div>
    </div>
  );
};
