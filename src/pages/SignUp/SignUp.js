import React from "react";
import GettingCard from "../../components/GettingCard/GettingCard";
import InputSection from "../../components/InputSection/InputSection";
import "./style.css";
import { Container } from "@mui/system";
import Header from "../../components/layouts/Header/Header";

const CardData = [
  { title: "Tell us where you live" },
  { title: "We’ll send your home’s BISH! code by SMS" },
  { title: "Tell your local BISH! team about your plumbing job and find out your discounted BISH! price" },
];

const SignUp = () => {
  return (
    <>
      <div className="App backgroundColor">
        <Header />
        <Container>
          <p className="getting_title">
            You're so close to getting your home's 2024 BISH! code.
          </p>
          <div className="gettingCard_container">
            {CardData.map((item, index) => (
              <GettingCard key={index} title={item.title} />
            ))}
          </div>
        </Container>
        <div className="getting_Bar">
          <p className="bartext1">
            Let's get started so we can get an expert to your door at your
            home's exclusive BISH! price.
          </p>
          <p className="bartext2">
            Please note. BISH! codes are only available in certain areas
          </p>
        </div>
        <Container>
          <InputSection />
        </Container>
      </div>
    </>
  );
};

export default SignUp;
