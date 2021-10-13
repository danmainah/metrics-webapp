import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const state = useSelector((state) => state.corona);
  const world = useSelector((state) => state.world);

  console.log(state);
  const data = state.filter((value) => value.todayCases)
    .sort((a, b) => b.todayCases - a.todayCases)
    .splice(0, 10);
  console.log(data);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2>Word Corona Statistics</h2>
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
          </div>
        </div>

        <div className="row">
          {data.map((corona) => (
            <Link className="card col-6 col-lg-4 text-decoration-none text-white" to={`/${corona.country}`} key={corona.country}>

              <div className="row g-0">
                <div className="col-md-4">
                  <img src={corona.countryInfo.flag} className="img-fluid rounded-start p-1 w-100" alt={corona.country} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">

                    {corona.country}

                    <p className="card-text">
                      Today corona cases:
                      {corona.todayCases}
                    </p>
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
