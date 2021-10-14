import { Link } from 'react-router-dom';

const Card = (corona) => {
  const { countryInfo, country, todayCases } = corona.corona;
  console.log(corona);
  return (
    <>
      <Link className="card col-6 col-lg-4 text-decoration-none text-white" to={`/${country}`} key={country}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={countryInfo.flag} className="img-fluid rounded-start p-1 w-100" alt={country} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4>{country}</h4>

              <p className="card-text">
                Today corona cases:
                {todayCases}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
