import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import Person2Icon from "@mui/icons-material/Person2"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import { Alert, FormControlLabel, Radio, RadioGroup, Fade, Modal, Box, Backdrop } from "@mui/material"

import { bishCode, create } from "../../api/userInfo_api"
import { END_POINT } from "../../config"


const InputSection = () => {

  const navigate = useNavigate()

  const [width, setWidth] = useState(window.innerWidth)

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const [result, setResult] = useState(false)
  const [result1, setResult1] = useState(false)


  const [searchTerm, setSearchTerm] = useState('')
  const [addressResults, setAddressResults] = useState([])
  const [address, setAddress] = useState({
    summaryline: '21 Pembridge Gardens, London, Greater London, W2 4EB',
    number: '15',
    premise: '',
    street: 'Smith Street',
    dependentlocality: '',
    posttown: 'London',
    postcode: 'W2:4EB',
    country: 'UK',
  })

  const [formdata, setFormdata] = useState({
    refno: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    postcode: ''
  })

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${END_POINT}/api/address-lookup`, {
        searchTerm: searchTerm,
        country: address.country,
      })

      const results = response.data

      if (results.length === 0) {
      } else {
        setAddressResults(results)
        setOpen(true)
      }
    } catch (error) {
      // console.error('Error fetching address data', error)
      // alert("Error fetching address data")
      setResult1(true)
    }
  }

  const selectedAddress = async (e) => {
    const selectedIndex = e.target.value;
    const address = addressResults[selectedIndex];

    if (address.postcode.toLowerCase().indexOf('w2') >= 0) {
      setAddress(address);

      setFormdata((prevFormdata) => ({
        ...prevFormdata,
        address1: address.summaryline,
        address2: address.street,
        city: address.posttown,
        postcode: address.postcode
      }));

      try {
        const data = await bishCode();
        // Again, use functional update to ensure the latest state is used
        setFormdata((prevFormdata) => ({
          ...prevFormdata,
          refno: data
        }));
      } catch (error) {
        console.error("Error fetching data from bishCode:", error);
      }

    } else {
      setResult(true);
    }

    setOpen(false);
  };


  const handleChange = (e, name) => {
    let values = e.target.value
    setFormdata({ ...formdata, [name]: values })
  }

  const handleSend = async (e) => {

    e.preventDefault()
    if (formdata.refno) {
      await create(formdata).then((data) => {
        // userId = '123'
        if (data.error) { alert("Server Error") }
        else {
          const userId = data._id
          userId ? navigate(`/sendCode/${userId}`) : navigate('/')
        }
      })
    } else {
      setResult(true)
    }
  }


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width < 600 ? '90%' : 580,
    height: width < 600 ? '95%' : 700,
    margin: 'auto',
    bgcolor: 'white',
    borderRadius: '20px',
    boxShadow: 24,
    overflow: 'auto',
    padding: '10px'
  }

  return (
    <div className="inputsection_container">
      <div className="inputheader">
        <div className="header_title">Your town is</div>
        <p className="liveInfo">{address.posttown}</p>
      </div>
      <div className="inputheader">
        <div className="header_title">You told us you live at</div>
        <p className="liveInfo">
          {address.number}, {address.street} <br />
          {address.postcode}
        </p>
      </div>
      <div className="inputbody">
        <div className="inputleft">
          <div className="inputWrapper">
            <label className="inputlabel">Select a town</label>
            <br />
            <p style={{ marginBottom: '10px', color: "#272727" }}>BISH! codes are only available in these towns right now</p>
            <input className="leftInput" />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Postcode</label>
            <br />
            <p style={{ marginBottom: '10px', color: "#272727" }}>Enter your postcode</p>
            <input
              className="leftInput" placeholder="Enter your postcode"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <LocationOnOutlinedIcon
              className="positionIcon"
              style={{
                color: "#FB2A63",
                position: "absolute",
                top: "95px",
                left: "5px",
              }}
            />
          </div>
          <button className="findAddBtn" onClick={handleSearch}>Find Address</button>
          <br />
          <div className="inputWrapper" style={{ position: "relative" }}>
            <input placeholder="Select Address" className="leftInput" onChange={() => { }} value={address.summaryline} />
            <LocationOnOutlinedIcon
              style={{
                color: "#FB2A63",
                position: "absolute",
                top: "20px",
                left: "5px",
              }}
            />
          </div>

        </div>
        <div className="inputheader1">
          <div className="header_title">Your town is</div>
          <p className="liveInfo">{address.posttown}</p>
        </div>
        <div className="inputheader1">
          <div className="header_title">You told us you live at</div>
          <p className="liveInfo">
            {address.number}, {address.street} <br />
            {address.postcode}
          </p>
        </div>
        <form className="inputright" onSubmit={(e) => handleSend(e)}>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">First name</label>
            <br />
            <input className="rightInput" onChange={(e) => handleChange(e, 'first_name')} required />
            <Person2Icon className="iconStyle" />
          </div>
          <div className="inputWrapper">
            <label className="inputlabel">Last name</label>
            <br />
            <input className="rightInput" onChange={(e) => handleChange(e, 'last_name')} required />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Email</label>
            <br />
            <p style={{ marginBottom: '10px', color: "#272727" }}>We'll send your home's BISH! code by email</p>
            <input type="email" className="rightInput" onChange={(e) => handleChange(e, 'email')} required />
            <EmailIcon className="iconStyle" />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Mobile phone</label>
            <br />
            <p style={{ marginBottom: '10px', color: "#272727" }}>We'll send your home's BISH! code by SMS</p>
            <input className="rightInput" onChange={(e) => handleChange(e, 'phone')} required />
            <PhoneIcon className="iconStyle" />
          </div>
          <button className="checkBish" type="submit">
            Check if BISH! codes are availabe
          </button>
        </form>
      </div>
      {addressResults.length > 0 &&
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <FormControlLabel
                value={''}
                label='Select Address'
                labelPlacement='start' control={<Radio />} />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(e) => selectedAddress(e)}
              >
                {addressResults.map((item, index) => (
                  <FormControlLabel
                    key={index} value={index}
                    label={item.summaryline}
                    labelPlacement='start' control={<Radio />} />
                  // <div key={index}

                  //   className="spaceBetween" style={{ borderBottom: '2px solid rgb(246, 246, 246)' }}
                  //   onClick={() => { setSelected(item.summaryline); setRadio(true) }}
                  // >
                  //   <h1 label={index} className="subTitle" style={{ margin: '5px', fontFamily: 'Inter' }}>{item.summaryline}</h1>
                  //   <input label={index} name="address" type="radio" value={radio} style={{ width: '17px', height: '17px' }} />
                  // </div>
                ))}
              </RadioGroup>
            </Box>
          </Fade>
        </Modal>
      }
      <Modal open={result} onClose={() => setResult(false)}>
        <Alert severity="error">
          You must input  as 'W2 XXX' correctly
        </Alert>
      </Modal>
      <Modal open={result1} onClose={() => setResult1(false)}>
        <Alert severity="error">
          Error fetching address data
        </Alert>
      </Modal>

    </div>
  )
}

export default InputSection
