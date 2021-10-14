import { Link } from 'react-router-dom';

const DetailsHeader = () => (
  <>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <i className="fa fa-angle-left m-1" />
          {' '}
          Go Back
        </Link>

        <div className="nav justify-content-center">
          <small>Countries view</small>
        </div>
        <div className="d-flex">
          <i className="fa  fa-microphone m-1" />
          <i className="fa fa-cog m-1" />
        </div>
      </div>
    </nav>
  </>
);

export default DetailsHeader;
