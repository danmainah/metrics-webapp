import { Link } from "react-router-dom";

const DetailsHeader = () => (
  <>
    <nav className="navbar bgi">
      <div className="container-fluid">
        <Link classname="text-reset">
          <i className="fa fa-angle-left m-1" />
          <small>Go Back</small>
        </Link>
        <div className="nav justify-content-center">
          <small>Country view</small>
        </div>
        <div className="d-flex">
          <i className="fa  fa-microphone me-3 " />
          <i className="fa fa-cog " />
        </div>
      </div>
    </nav>
  </>
);

export default DetailsHeader;
