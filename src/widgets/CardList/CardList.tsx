import React from 'react';
import Card from '../../shared/ui/Card/Card';
import classes from './CardList.module.scss';

interface CardListProps {
  openPopup: ()=> void;
}

const CardList = ({ openPopup }: CardListProps) => (
  <div className={classes.CardList}>
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
    <Card openPopup={openPopup} />
  </div>
);

export default CardList;
