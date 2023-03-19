import SwitchingLanguages from 'shared/accets/image/switching_languages.svg';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CardsPage.module.scss';
import { CardList } from '../../widgets/CardList/CardList';
import Modal from '../../shared/ui/Modal/Modal';
import { CardPopup } from '../../widgets/CardPopup/CardPopup';
import { loadPeople, sortPeople } from '../../redux/people/actions/actions';
import { useDispatch, useSelector } from '../../redux/hooks';
import { Loader } from '../../shared/ui/Loader/Loader';
import { Pagination } from '../../widgets/Pagination/Pagination';
import { SelectCard } from '../../widgets/SelectCard/SelectCard';
import i18n from '../../shared/config/i18n/i18n';

export const CardsPage = () => {
  const { dataFiltered } = useSelector((state) => state.people);
  const { dataLoading } = useSelector((state) => state.people);
  const [openPopupCard, setOpenPopupCard] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 9;

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = dataFiltered.slice(firstCountryIndex, lastCountryIndex);

  useEffect(() => {
    dispatch(loadPeople());
  }, [dispatch]);

  const toggleLanguages = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'wookiee' : 'en');
  };

  const { t, i18n } = useTranslation();

  const openPopup = () => {
    setOpenPopupCard(true);
  };

  const onClosePopup = () => {
    setOpenPopupCard(false);
  };

  const handlerPagination = (number: number) => {
    setCurrentPage(number);
  };

  const onChange = useCallback((value: string) => {
    dispatch(sortPeople(value));
    setCurrentPage(1);
  }, [dispatch]);

  return (
    <>
      {dataLoading
        ? (
          <section className={classes.CardPage}>
            <p className={classes.language}>{t('Язык')}</p>
            <h1 className={classes.title}>
              {`${dataFiltered.length} ${t('Заголовок')}`}
            </h1>
            <SelectCard onChange={onChange} />
            <CardList
              data={currentCountry}
              openPopup={openPopup}
            />
            <Pagination
              countriesPerPage={countriesPerPage}
              totalCountries={dataFiltered.length}
              handlerPagination={handlerPagination}
              currentPage={currentPage}
            />
            <SwitchingLanguages onClick={toggleLanguages} className={classes.image} />
            {openPopupCard
            && (
              <Modal popupClose={onClosePopup}>
                <CardPopup />
              </Modal>
            )}
          </section>
        )
        : (
          <>
            <Loader />
          </>
        )}
    </>
  );
};
