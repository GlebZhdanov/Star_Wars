import Aliens from 'shared/accets/image/inoplanets.svg';
import React from 'react';
import Male from 'shared/accets/image/male.svg';
import Emale from 'shared/accets/image/emale.svg';
import classes from './CardPopup.module.scss';
import { useSelector } from '../../redux/hooks';

export const CardPopup = () => {
  const { dataPeoplePopup } = useSelector((state) => state.people);
  console.log(dataPeoplePopup);
  const {
    name,
    skin_color,
    hair_color,
    height,
    mass,
    birth_year,
    gender,
  } = dataPeoplePopup;

  function handlerGender(gender: string) {
    if (gender === 'male') {
      return <li style={{ backgroundColor: '#73D677' }} className={classes.enum_floor}>{gender}</li>;
    } if (gender === 'hermaphrodite') {
      return <li style={{ backgroundColor: '#F5DB13' }} className={classes.enum_floor}>{gender}</li>;
    } if (gender === 'female') {
      return <li style={{ backgroundColor: '#C956FF' }} className={classes.enum_floor}>{gender}</li>;
    }
    return null;
  }

  function handlerGenderImage(gender: string) {
    if (gender === 'male') {
      return <Male />;
    } if (gender === 'hermaphrodite') {
      return <Aliens />;
    } if (gender === 'female') {
      return <Emale />;
    }
    return null;
  }

  return (
    <>
      <div className={classes.card_content_image}>
        {handlerGenderImage(gender)}
        <ul className={classes.enum}>
          {handlerGender(gender)}
          {birth_year === 'unknown' ? null
            : <li className={classes.enum_type}>{birth_year}</li>}
        </ul>
      </div>
      <div className={classes.card_content}>
        <div className={classes.container}>
          <h3 className={classes.title}>{name}</h3>
          <div className={classes.container_content}>
            <div className={classes.container_subtitle}>
              {hair_color === 'none' || hair_color === 'n/a'
                ? null
                : <p className={classes.subtitle}>{`hair color: ${hair_color}`}</p>}
              {skin_color === 'unknown'
                ? null
                : <p className={classes.subtitle}>{`skin color - ${skin_color}`}</p>}
            </div>
          </div>
          <div className={classes.list}>
            <ul className={classes.list_container}>
              <li className={classes.number}>{height}</li>
              <li className={classes.number_title}>height</li>
            </ul>
            { mass === 'unknown'
              ? null
              : (
                <ul className={classes.list_container}>
                  <li className={classes.number}>{mass}</li>
                  <li className={classes.number_title}>mass</li>
                </ul>
              )}
          </div>
        </div>
      </div>
    </>
  );
};
