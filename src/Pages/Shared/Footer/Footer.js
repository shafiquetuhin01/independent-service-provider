import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5 bg-dark text-white">
      <p className="p-2">
        <h6>Copyright &copy; {year} </h6>
      </p>
    </footer>
  );
};

export default Footer;
