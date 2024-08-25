import React from "react";
import "../../pages/SendCode/style.css";
import { Container } from "@mui/material";

const Awesome = () => {
  return (
    <div className="awesomeContainer">
      <Container>
        <div className="awesomeWrapper">
          <div className="awesomeText">
            Awesome! a BISH! code
            is available at 15, Smith
            Street, London,
            W2:4EB
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Awesome;
