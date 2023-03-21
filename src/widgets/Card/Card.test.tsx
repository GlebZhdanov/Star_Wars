// @ts-nocheck
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/StoreProvider/config/store';
import { Card } from './Card';

describe('Card', () => {
  const data = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
  };

  test('test render', () => {
    render(
      <Provider store={store}>
        <Card data={data} />
      </Provider>,
    );
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toHaveTextContent('Luke Skywalker');
    expect(screen.getByTestId('card-height')).toHaveTextContent('172');
    expect(screen.getByTestId('card-mass')).toHaveTextContent('77');
    expect(screen.getByTestId('card-birth_year')).toHaveTextContent('19BBY');
    expect(screen.getByTestId('card-gender')).toHaveTextContent('male');
  });
});
