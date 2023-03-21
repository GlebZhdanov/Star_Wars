import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/StoreProvider/config/store';
import { CardPopup } from 'widgets/CardPopup/CardPopup';

describe('Card', () => {
  test('test render', () => {
    render(
      <Provider store={store}>
        <CardPopup />
      </Provider>,
    );
  });
});
