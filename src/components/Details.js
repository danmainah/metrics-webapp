import { Link } from 'react-router-dom';

const Details = (corona) => (
  <>
    <h2>
      This is the details page of
      {corona.corona.country}
    </h2>
    <h3>
      Number of Cases registered today
      { corona.corona.todayCases }
    </h3>
    <Link to="/">
      Home
    </Link>
  </>
);

export default Details;
