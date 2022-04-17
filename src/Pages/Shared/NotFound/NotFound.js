import React from "react";
import page404 from "../../../Images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center" style={{ marginTop: "70px" }}>
        Ops..Page Not Found !!!
      </h2>
      <img style={{ width: "100%", height: "650px" }} src={page404} alt="" />
    </div>
  );
};

export default NotFound;
