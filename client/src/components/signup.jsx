import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import '../styles/signup.css';


const signup = () => {
  return (
    <div className="signUppage">
      <div class="signUp">
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
          <Button colorScheme="facebook" m={'10'} variant={'solid'}>
            Submit
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default signup;
