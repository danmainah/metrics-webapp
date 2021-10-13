import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Details from '../../components/Details';

test('Check if Details is rendering correctly', () => {
  const body = document.createElement('tbody');
  const corona = {
    country: 'Kenya',
    todayCases: 5,
    tests: 1000,
    countryInfo: {
      flag: 'https://disease.sh/assets/img/flags/af.png',
    },
  };
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Details corona={corona} />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
