import { useSelector } from 'react-redux';
import mapi from '../mapi.png';
import Header from '../components/HomeHeader';
import Card from '../components/HomeCard';

const Home = () => {
  const state = useSelector((state) => state.corona);
  const world = useSelector((state) => state.world);
  const data = state.filter((value) => value.todayCases)
    .sort((a, b) => b.todayCases - a.todayCases)
    .splice(0, 10);
  return (
    <>
      <Header />
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
            <Card key={corona.country} corona={corona} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
