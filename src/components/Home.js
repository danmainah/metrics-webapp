import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const state = useSelector((state) => state.corona);
  const world = useSelector((state) => state.world);
  return (
    <>
      <ul>
        <h2>
          Population with Covid per 1 million:
          {world.activePerOneMillion}
        </h2>
        <h3>
          Countries affected:
          {world.affectedCountries}
        </h3>
      </ul>
      <ul>
        {state.map((corona) => (
          <li key={corona.country}>
            <Link to={`/${corona.country}`}>
              {corona.country}
            </Link>
            {corona.todayRecovered}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
