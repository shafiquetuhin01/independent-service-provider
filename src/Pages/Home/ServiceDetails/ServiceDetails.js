import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../Service/Service";

const ServiceDetails = () => {
  let { serviceId } = useParams();
  const [service, setService] = useState([]);
  const url = `services.json?id=${serviceId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <h2 className="text-center text-info">Individual Service Details</h2>
      <div className="d-flex align-items-center justify-content-center">
        <Service></Service>
      </div>
    </div>
  );
};

export default ServiceDetails;
