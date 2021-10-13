import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import mapi from '../mapi.png';

const Home = () => {
  const state = useSelector((state) => state.corona);
  const world = useSelector((state) => state.world);
  const data = state.filter((value) => value.todayCases)
    .sort((a, b) => b.todayCases - a.todayCases)
    .splice(0, 10);
  return (
    <>
      <div className="container-fluid">
        <div className="card mb-3 border-0 ">
          <div className="row g-0">
            <div className="col-4">
              <img src={mapi} className="img-fluid rounded-start w-100 clasi" alt="img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title text-center mt-3">Corona Daily Update</h5>
                <p className="card-text text-center mt-3">
                  Countries affected:
                  {' '}
                  {world.affectedCountries}
                </p>
              </div>
            </div>
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
