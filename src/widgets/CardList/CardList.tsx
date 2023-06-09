import React from 'react';
import { Card } from '../Card/Card';
import classes from './CardList.module.scss';

interface CardListProps {
  openPopup: ()=> void;
  data?: any[] | undefined;
}

export const CardList = ({ openPopup, data }: CardListProps) => (
  <div className={classes.CardList}>
    {data.length !== 0 && data.map((element: any, index: number) => (
      <Card
        key={index}
        data={element}
        openPopup={openPopup}
      />
    ))}
  </div>
);
