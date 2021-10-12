import './App.css';
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
import { getCorona } from './redux/corona/corona';
import { getWorld } from './redux/corona/world';

const App = () => {
  const state = useSelector((state) => state.corona);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCorona());
    dispatch(getWorld());
  }, [dispatch]);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {state.map((corona) => (
        <Route key={`${corona.country}#path`} path={`/${corona.country}`}>
          <Details corona={corona} />
        </Route>
      ))}
    </Switch>
  );
};

export default App;
