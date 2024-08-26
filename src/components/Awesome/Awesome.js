import React from "react";
import "../../pages/SendCode/style.css";
import { Container } from "@mui/material";

const Awesome = () => {
  return (
    <div className="awesomeContainer">
      <Container>
        <div className="awesomeWrapper">
          <div className="awesomeText">
            Awesome! A BISH! code is available at:
            <br />
            <div className="awesomeTextSpan">
              15, Smith Street
              <br /> London
              <br /> W2:4EB
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Awesome;
