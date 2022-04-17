import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../../Images/advisor1.jpg";
import image2 from "../../../Images/advisor2.jpg";
import image3 from "../../../Images/advisor3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 carousel-img">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>
                  <h3 className="text-black text-uppercase">
                    I will be your financial advisor
                  </h3>
                  <p className="text-black">
                    I will be always aware of all business and financial news
                    asd stay informed with investment tips, market predictions,
                    business advice and guides.
                  </p>
                  <button className="btn btn-info btn-lg text-black">
                    CONSULTANT
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3 className="text-black text-uppercase">
                    I will be your financial consultant
                  </h3>
                  <p className="text-black">
                    I will be always aware of all business and financial news
                    asd stay informed with investment tips, market predictions,
                    business advice and guides.
                  </p>
                  <button className="btn btn-info btn-lg text-black">
                    CONSULTANT
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                  <h3 className="text-black text-uppercase">
                    I will be your financial assistant
                  </h3>
                  <p className="text-black">
                    I will be always aware of all business and financial news
                    asd stay informed with investment tips, market predictions,
                    business advice and guides.
                  </p>
                  <button className="btn btn-info btn-lg text-black">
                    CONSULTANT
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
