import React, { useCallback } from 'react';
import { useDispatch } from 'app/StoreProvider/config/hooks';
import { peoplePopup } from 'redux/people/actions/actions';
import classes from './Card.module.scss';

interface CardProps {
  openPopup: () => void;
  data: any,
}

export function handlerGender(gender: string) {
  if (gender === 'male') {
    return <li data-testid="card-gender" style={{ backgroundColor: '#73D677' }} className={classes.enum_floor}>{gender}</li>;
  } if (gender === 'hermaphrodite') {
    return <li data-testid="card-gender" style={{ backgroundColor: '#F5DB13' }} className={classes.enum_floor}>{gender}</li>;
  } if (gender === 'female') {
    return <li data-testid="card-gender" style={{ backgroundColor: '#C956FF' }} className={classes.enum_floor}>{gender}</li>;
  }
  return null;
}

export const Card = ({ openPopup, data }: CardProps) => {
  const {
    name,
    height,
    mass,
    birth_year,
    gender,
  } = data;

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(peoplePopup(data));
  }, [data, dispatch]);

  return (
    <div id="people-card" data-testid="card" className={classes.Card} onClick={openPopup}>
      <ul onClick={handleClick} className={classes.card_container}>
        <h3 data-testid="card-title" className={classes.tittle}>{name}</h3>
        <ul className={classes.list}>
          {height === 'unknown' ? null
            : (
              <ul className={classes.list_container}>
                <li data-testid="card-height" className={classes.number}>{height}</li>
                <li className={classes.number_title}>height</li>
              </ul>
            )}
          <ul className={classes.list_container}>
            {mass === 'unknown' ? null
              : (
                <>
                  <li data-testid="card-mass" className={classes.number}>{mass}</li>
                  <li className={classes.number_title}>mass</li>
                </>
              )}
          </ul>
        </ul>
        <ul className={classes.enum}>
          {handlerGender(gender)}
          {birth_year === 'unknown' ? null
            : (<li data-testid="card-birth_year" className={classes.enum_type}>{birth_year}</li>
            )}
        </ul>
      </ul>
    </div>
  );
};
