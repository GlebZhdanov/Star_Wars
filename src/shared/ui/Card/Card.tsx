import React from 'react';
import classes from './Card.module.scss';

interface CardProps {
  openPopup: ()=> void;
}

const Card = ({ openPopup }: CardProps) => (
  <div className={classes.Card} onClick={openPopup}>
    <ul className={classes.card_container}>
      <h3 className={classes.tittle}>Jango Fett</h3>
      <ul className={classes.list}>
        <ul className={classes.list_container}>
          <li className={classes.number}>100</li>
          <li className={classes.number_title}>height</li>
        </ul>
        <ul className={classes.list_container}>
          <li className={classes.number}>200</li>
          <li className={classes.number_title}>mass</li>
        </ul>
      </ul>
      <ul className={classes.enum}>
        <li className={classes.enum_floor}>male</li>
        <li className={classes.enum_type}>19BBY</li>
      </ul>
    </ul>
  </div>
);
export default Card;
