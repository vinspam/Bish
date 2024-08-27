import { Backdrop, Box, Button, Container, Fade, Modal, Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../../components/table/DataTable'
import { PostCode } from '../../components/table/PostCode'
import { userList } from '../../api/userInfo_api'




export const Admin = () => {

    const [flag, setFlag] = useState(null)
    const [width, setWidth] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)

    const [userData, setUserData] = useState([
        // { id: 1, dateJoined: '8/27/2024', bishCode: '777', firstName: 'Jon', surname: 'Snow', email: 'snow@gmail.com', mobile: '123123' },
        // { id: 2, dateJoined: '1/7/2024', bishCode: '666', firstName: 'Cersei', surname: 'Lannister', email: 'Lannister@gmail.com', mobile: '234234' },
        // { id: 3, dateJoined: '7/3/2024', bishCode: '555', firstName: 'Jaime', surname: 'Lannister', email: 'Jaime@gmail.com', mobile: '345345' },
        // { id: 4, dateJoined: '2/27/2024', bishCode: '444', firstName: 'Arya', surname: 'Stark', email: 'Stark@gmail.com', mobile: '456456' },
        // { id: 5, dateJoined: '4/11/2024', bishCode: '333', firstName: 'Daenerys', surname: 'Targaryen', email: 'Targaryen@gmail.com', mobile: '567567' },
        // { id: 6, dateJoined: '3/12/2024', bishCode: '222', firstName: 'Ferrara', surname: 'Clifford', email: 'Clifford@gmail.com', mobile: '678678' },
    ])
    const [postData, setPostData] = useState(['W2'])

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        userList().then((data) => {
            if (data.error) { alert("error") }
            else {
                let temp = [];
                data.map((item, index) => {
                    temp[index] = item
                    temp[index].id = index + 1
                    const dateStr = item.createdAt;
                    const date = new Date(dateStr);
                    const formattedDate = date.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    });
                    temp[index].date = formattedDate;
                })
                console.log('userData : ', data)
                console.log('temp : ', temp)
                setUserData(temp);
            }
        })
    }, [])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width < 800 ? '90%' : 680,
        height: width < 600 ? '95%' : 700,
        margin: 'auto',
        bgcolor: 'white',
        borderRadius: '20px',
        boxShadow: 24,
        overflow: 'auto',
        padding: '10px'
    }

    return (
        <Container>
            <p className='bigTitle' style={{ color: '#b6b6b6', paddingTop: '30px' }}>Welcome, BISH! Admin..</p>
            <div className='flexWrap'>
                <div className='section'>
                    <Container>
                        <div className='heroCard itemCenter' style={{ background: '#F6F6F6' }}>
                            <div style={{ fontFamily: 'Inter !important', textAlign: 'center' }}>
                                <p className='bigTitle'>{userData.length}</p>
                                <p className='subTitle'>Total Users</p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='section'>
                    <Container>
                        <div className='heroCard itemCenter' style={{ background: '#F6F6F6' }}>
                            <div style={{ fontFamily: 'Inter !important', textAlign: 'center' }}>
                                <p className='bigTitle'>18</p>
                                <p className='subTitle'>Edit postcodes</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <p className='bigTitle' style={{ color: '#b6b6b6', paddingTop: '30px' }}>What do you want to do? </p>
            <div className='flexWrap'>
                <div className='section itemCenter'>
                    <Button onClick={() => { setOpen(true); setFlag(1) }} className="button" variant="contained" style={{ fontSize: '18px' }}>See Users</Button>
                </div>
                <div className='section itemCenter'>
                    <Button onClick={() => { setOpen(true); setFlag(2) }} className="button" variant="contained" style={{ fontSize: '18px' }}>Edit postcodes</Button>
                </div>
            </div>
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
                        <p className='bigTitle'>
                            {flag === 1 ? `Your ${userData?.length} users are:` : 'Here are the postcodes which are active'}
                        </p>
                        {flag === 1 ? <DataTable userData={userData} /> : <PostCode postData={postData} />}
                    </Box>
                </Fade>
            </Modal>
        </Container>
    )
}