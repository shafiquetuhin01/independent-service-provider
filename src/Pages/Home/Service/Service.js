import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, description, img, price } = service;
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          {/* image styles  */}
          <img style={{ width: "100%", height: "300px" }} src={img} alt="" />
          <h5 className="card-title mt-2">Service Name: {name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Id: {id}</h6>
          <h6 className="card-subtitle mb-2 text-muted">
            Details: {description}
          </h6>
          <h5 className="card-subtitle mb-2 mt-2 fw-bold text-muted">
            Price: {price}
          </h5>
          <Link to={`/services/${id}`} className="card-link">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
