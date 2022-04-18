import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  let { serviceId } = useParams();
  console.log(serviceId);

  return <div></div>;
};

export default ServiceDetails;
