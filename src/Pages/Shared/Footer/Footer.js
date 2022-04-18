import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5 bg-dark text-white ">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="text-start p-2">
            <h3 className="text-decoration-underline mb-2">My Services:</h3>
            <h5>Financial Planning</h5>
            <h5>Risk Management</h5>
            <h5>Budgetary Planning</h5>
            <h5>Expense Management</h5>
          </div>
          <div className="text-start p-2">
            <h4 className="text-decoration-underline">Newsletter</h4>
            <p>
              Register to my website for better service as early as possible.
            </p>
            <input type="text" placeholder="Enter your email" />
            <br />
            <button className="btn btn-primary mt-2 btn-lg">Subscribe</button>
          </div>
        </div>

        <p className="p-2">
          <h6>Copyright &copy; {year} </h6>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
