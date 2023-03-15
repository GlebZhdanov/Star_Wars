import SwitchingLanguages from 'shared/accets/image/switching_languages.svg';
import { useEffect, useState } from 'react';
import classes from './CardsPage.module.scss';
import CardList from '../../widgets/CardList/CardList';
import Modal from '../../shared/ui/Modal/Modal';
import { CardPopup } from '../../widgets/CardPopup/CardPopup';
import { api } from '../../shared/api/api';

export const CardsPage = () => {
  const [openPopupCard, setOpenPopupCard] = useState<boolean>(false);

  useEffect(() => {
    api.getPeopleData();
  }, []);

  const switchLanguages = () => {
    console.log('afa');
  };

  const openPopup = () => {
    setOpenPopupCard(true);
  };

  const onClosePopup = () => {
    setOpenPopupCard(false);
  };

  return (
    <section className={classes.CardPage}>
      <p className={classes.language}>language: en</p>
      <h1 className={classes.title}>60 Peoples for you to choose your favorite</h1>
      <div className={classes.container}>
        <p className={classes.container_title}>color eye</p>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <select className={classes.select} />
      </div>
      <CardList openPopup={openPopup} />
      <SwitchingLanguages className={classes.image} onClick={switchLanguages} />
      {openPopupCard
        && (
          <Modal popupClose={onClosePopup}>
            <CardPopup />
          </Modal>
        )}
    </section>
  );
};
