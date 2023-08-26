import React from 'react';
import '../styles/error.css';
import {Button} from '@chakra-ui/react'

const Error = () => {
    return (
        <div className='error' style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"white",height:"100vh"}}>
            <div className="page_404">
                <h2 className='errorHeading'>404.</h2>
            
            </div>
            <button className="headaboutbtn" style={{marginBottom:"5%"}}>
              <a href={'/'}>Back Home</a>
            </button>
        </div>
    );
};

export default Error;
