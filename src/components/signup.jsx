import React from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import '../styles/signup.css';
import Footer from './Footer.jsx';
const signup = () => {
  return (
    <div className="signUppage">
      <div class="signUp" style={{ marginBottom: '45rem' }}>
        <VStack
          spacing={'1.5'}
          w={'72'}
          pos={'absolute'}
          left={['40%']}
          top={'44'}
        >
          <label className="logintext">SignUp Form</label>
          <label className="loginlabel">Username</label>
          <Input
            variant="flushed"
            placeholder="username..."
            type="text"
            colorScheme="facebook"
          />
          <label className="loginlabel">EmailID</label>
          <Input
            variant="flushed"
            placeholder="email..."
            type="email"
            colorScheme="facebook"
          />
          <label className="loginlabel">Mobile number</label>
          <Input
            variant="flushed"
            placeholder="password..."
            type="tel "
            colorScheme="facebook"
          />
          <label className="loginlabel">Password</label>
          <Input
            variant="flushed"
            placeholder="password..."
            type="password"
            colorScheme="facebook"
          />
          <Button colorScheme="facebook" m={'10'} variant={'solid'}>
            Submit
          </Button>
        </VStack>
      </div>
      <Footer />
    </div>
  );
};

export default signup;
