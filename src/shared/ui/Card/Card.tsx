import React, { useCallback } from 'react';
import classes from './Card.module.scss';
import { useDispatch, useSelector } from '../../../redux/hooks';
import { peoplePopup } from '../../../redux/people/actions/actions';

interface CardProps {
  openPopup: () => void;
  data: any,
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

  function handlerGender(data: any) {
    if (data === 'male') {
      return <li style={{ backgroundColor: '#73D677' }} className={classes.enum_floor}>{data}</li>;
    } if (data === 'hermaphrodite') {
      return <li style={{ backgroundColor: '#F5DB13' }} className={classes.enum_floor}>{data}</li>;
    } if (data === 'female') {
      return <li style={{ backgroundColor: '#C956FF' }} className={classes.enum_floor}>{data}</li>;
    }
    return null;
  }

  return (
    <div className={classes.Card} onClick={openPopup}>
      <ul onClick={handleClick} className={classes.card_container}>
        <h3 className={classes.tittle}>{name}</h3>
        <ul className={classes.list}>
          {height === 'unknown' ? null
            : (
              <ul className={classes.list_container}>
                <li className={classes.number}>{height}</li>
                <li className={classes.number_title}>height</li>
              </ul>
            )}
          <ul className={classes.list_container}>
            {mass === 'unknown' ? null
              : (
                <>
                  <li className={classes.number}>{mass}</li>
                  <li className={classes.number_title}>mass</li>
                </>
              )}
          </ul>
        </ul>
        <ul className={classes.enum}>
          {handlerGender(gender)}
          {birth_year === 'unknown' ? null
            : (<li className={classes.enum_type}>{birth_year}</li>
            )}
        </ul>
      </ul>
    </div>
  );
};
