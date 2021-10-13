import React from 'react';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Home from '../../components/Home';

test('Check if Home is rendering correctly', () => {
  const body = document.createElement('tbody');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});