import React from 'react';
import {Sidebar} from "../Sidebar/ui/Sidebar";
import classes from './Header.module.scss'

export const Header = () => {
  return (
    <div className={classes.Header}>
      <p>Картинка</p>
      <div className={classes.content_link}>
        <Sidebar />
      </div>
    </div>
  );
};
