import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import PhoneIcon from "@mui/icons-material/Phone";
import "../../pages/SendCode/style.css";
import { mouse } from "../../constant";
import { Container } from "@mui/material";

const EditNumber = () => {
  return (
    <div className="eNumberCon">
      <Container>
        <div className="eNumberWra">
          <div className="eNumLefSec">
            <div className="NumTopWrap">
              <p className="NumleftText">
                We'll send your home's BISH! code by SMS.
              </p>
              <p className="NumLeftNum">
                0784665434
                <br />
                <a
                  href="#"
                  className="NumLeftNum"
                  style={{ color: "rgb(251, 42, 99)" }}
                >
                  Edit number
                </a>
                <br />
              </p>
            </div>
            <div className="NumTopWrap1">
              <div className="numtopTitle">OK, YOU'RE ALL SET</div>
              <div className="numtopText">
                We'll send your home's BISH! code straight away.
              </div>
              <button className="sendBish">Send BISH! code</button>
            </div>
          </div>
          <div className="eNumRigSec">
            <p className="eNumRigText">What next?</p>
            <div className="nextCon">
              <SmsIcon
                style={{ color: "#FB2A63", fontSize: "30px" }}
                className="editIcon"
              />
              <div className="nextText">
                We'll send your home's BISH!
                <br /> code by text
              </div>
            </div>
            <div className="nextCon">
              <PhoneIcon
                style={{ color: "#FB2A63", fontSize: "30px" }}
                className="editIcon"
              />
              <div className="nextText">
                Call your local BISH! team and quote your home's BISH! code to
                find out the exclusive price for your plumbing job.
              </div>
            </div>
            <div className="nextCon">
              <img
                src={mouse}
                alt="mouse"
                style={{ width: "30px" }}
                className="editIconImg"
              />
              <div className="nextText">
                Book when you're ready and pay
                <br />
                on completion.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditNumber;
