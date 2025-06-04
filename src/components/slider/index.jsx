import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="slider-container mb-5">
      <Row className="gx-3 align-items-center">
        {/* rightside preview  */}
        <Col xs={12} md={3} className="order-1 order-md-2 mb-3 mb-md-0">
          <div className="side-preview">
            <img src={images[index]} alt="Side preview" />
          </div>
        </Col>

        {/* main carousel -left side*/}
        <Col xs={12} md={9} className="order-2 order-md-1">
          <div className="main-preview">
            <div className="slider-image">
              <img src={images[index]} alt={`Slide ${index + 1}`} />
            </div>
            {/* dots/slider control*/}
            <div className="slider-controls">
              <span
                className="slider-arrow"
                onClick={() =>
                  setIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                <FiChevronLeft size={24} color="black" />
              </span>
              <span className="slider-dots mt-2">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`slider-dot${i === index ? " active" : ""}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </span>
              <span
                className="slider-arrow"
                onClick={() =>
                  setIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <FiChevronRight size={24} color="black" />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Slider;
