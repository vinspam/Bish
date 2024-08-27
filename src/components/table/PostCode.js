import { Button } from '@mui/material'
import React from 'react'


export const PostCode = ({ postData }) => (
    <div className='itemCenter'>
        <div style={{ textAlign: 'center' }}>
            {postData.map((title, index) => (
                <p key={index} className='bigTitle' style={{ fontWeight: '600' }}>{title}</p>
            ))}
            <Button className="button" variant="contained" style={{ fontSize: '18px' }}>Add another postcode</Button>
        </div>
    </div>
)