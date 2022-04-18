import React, { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return <div></div>;
};

export default ServiceDetails;
