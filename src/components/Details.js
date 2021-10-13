import { Link } from 'react-router-dom';

const Details = (corona) => {
  const {
    country, todayCases, countryInfo, tests,
  } = corona.corona;
  return (
    <>
      <div className="card mb-3">
        <Link to="/">
          <i className="fa fa-arrow-left m-1" />
          {' '}
          Go Back
        </Link>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={countryInfo.flag} className="img-fluid rounded-start p-1 w-100" alt={country} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {' '}
                {country}
                {' '}
                corona informatin
              </h5>
              <p className="card-text">
                {' '}
                Number of Cases registered today
                {' '}
                {todayCases }
              </p>
              <p className="card-text">
                <small className="text">
                  Number of tests done
                  {' '}
                  {' '}
                  {tests}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Details;
