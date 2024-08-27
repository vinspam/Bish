import React, { useEffect, useState } from "react"
import SmsIcon from "@mui/icons-material/Sms"
import PhoneIcon from "@mui/icons-material/Phone"
import { Box, Container, Modal } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

import "../../pages/SendCode/style.css"
import { mouse } from "../../constant"
import { read, sendEmail, sendextra, sendsms } from "../../api/userInfo_api"
import { useParams } from "react-router-dom"

const EditNumber = () => {

  const [alertModal, setAlertModal] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [success, setSuccess] = useState(false)

  const id = useParams();

  const [user, setUser] = useState({})

  useEffect(() => {
    read(id.userId).then((data) => {
      if (data.error) { alert("Server Error") }
      else {
        setUser(data)
      }
    })
  }, [])


  const styleAlert = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width < 600 ? '93%' : 580,
    height: width < 600 ? '50%' : 500,
    margin: 'auto',
    bgcolor: '#fb2a63',
    boxShadow: 24,
    padding: '5px',
    textAlign: 'center',
    color: 'white',
  }

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleClick = () => {

    sendsms(user._id).then((data) => {
      console.log("data1:", data)
      data.message && setTimeout(() => sendextra(user._id).then((data) => {
        setAlertModal(true)
        data.message && setSuccess(true)
      }), 10000);
    })
    sendEmail(user).then((data) => {
      console.log("data3:", data)
    })
  }

  return (
    <>
      <div className="awesomeContainer">
        <Container>
          <div className="awesomeWrapper">
            <div className="awesomeText">
              Awesome! A BISH! code is available at:
              <div className="awesomeTextSpan">
                {user.number}, {user.address2},<br />
                {user.postcode}
              </div>
            </div>
          </div>
        </Container >
      </div >
      <div className="eNumberCon">
        <Container>
          <div className="eNumberWra">
            <div className="eNumLefSec">
              <div className="NumTopWrap">
                <p className="NumleftText">We'll send your home's BISH! code by SMS.</p>
                <p className="NumLeftNum">
                  {user.phone}<br />
                  <a href="#" className="NumLeftNum" style={{ color: "rgb(251, 42, 99)" }} >Edit number</a><br />
                </p>
              </div>
              <div className="NumTopWrap1">
                <div className="numtopTitle">OK, YOU'RE ALL SET</div>
                <div className="numtopText">
                  We'll send your home's BISH! code straight away.
                </div>
                <button className="sendBish" onClick={() => handleClick()}>Send BISH! code</button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={alertModal}
                  onClose={() => setAlertModal(false)}
                  closeAfterTransition
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Box sx={styleAlert}>
                    <div className="modalClose" onClick={() => setAlertModal(false)}><CloseIcon /> </div>
                    <div className="itemCenter" style={{ width: '100%', height: '100%' }}>
                      <div style={{ padding: '6px' }}>
                        <p className="bigTitle" style={{ fontFamily: 'Inter', fontWeight: '400' }}>
                          {success ? 'Great All Done' : 'Ah! Hang on.'}
                        </p>
                        <p className="subTitle" style={{ fontFamily: 'Inter', fontWeight: '200' }}>
                          {success ?
                            `We've sent your home's 2024 BISH! code to your SMS inbox. The teams are ready to confirm your BISH! price once you have a job to quote on.`
                            :
                            `It seems BISH! codes haven't arrived in your postcode area yet.Check back soon. `}
                        </p>
                      </div>
                    </div>
                  </Box>
                </Modal>
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
    </>
  );
};

export default EditNumber;
