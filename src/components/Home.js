import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCorona } from '../redux/corona/corona';

const Home = () => {
  const state = useSelector((state) => state.corona);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCorona());
  }, [dispatch]);

  return (
    <>
      <ul>
        {state.map((corona) => (
          <li key={corona.country}>
            {corona.country}
            {corona.todayRecovered}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
