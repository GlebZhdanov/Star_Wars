import classes from './Pagination.module.scss';

export const Pagination = (props: any) => {
  const {
    countriesPerPage,
    totalCountries,
    handlerPagination,
    currentPage,
  } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.content}>
      <ul className={classes.pagination}>
        {
          pageNumbers.map((number) => (
            <li
              onClick={() => handlerPagination(number)}
              key={number}
              className={classes.list}
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={currentPage === number ? classes.active : ''}
              >
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
