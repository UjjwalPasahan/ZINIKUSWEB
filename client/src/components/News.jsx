import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import '../styles/news.css';
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <div className="newspage" id='newsletter'>
      <div className='back backbtn' >
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div className="news">
        <VStack
          className='newsletterContent'
          spacing={'1.5'}
          w={'72'}
          pos={'absolute'}
          left={['40%']}
          top={'44'}
        >
          <label className="logintext">Subscribe to our Newsletter </label>
          {/* <label className="loginlabel">Name</label> */}
          <Input
            variant="flushed"
            placeholder="Name*"
            type="text"
            colorScheme="facebook"
            required
          />
          {/* <label className="loginlabel">EmailID</label> */}
          <Input
            variant="flushed"
            placeholder="E-mail*"
            type="email"
            colorScheme="facebook"
            required
          />
          {/* <label className="loginlabel">Mobile number</label> */}
          <Input
            variant="flushed"
            placeholder="Mobile Number"
            type="tel "
            colorScheme="facebook"
          />
          <div className='checkboxText'>
          <input value="test" type="checkbox" /><br />
            I agree to receive emails from Zinikus pvt ltd. <br />
            View our <a href="/TermsConditions" style={{color:"Blue"}}>terms of service.</a></div>
          <Button colorScheme="twitter" m={'10'} variant={'solid'}>
            Subscribe
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default signup;
