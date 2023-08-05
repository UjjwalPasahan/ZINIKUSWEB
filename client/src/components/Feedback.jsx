import React from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';
import '../styles/feedback.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Feedback = () => {
  return (
    <div className="backgroundimg">
      <div className="back">
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div class="login" 
      // style={{ marginBottom: '30rem' }}
      >
        <VStack
          className='feedbackContent'
          spacing={'1.5'}
          w={'72'}
          pos={'absolute'}
          marginBlock={'2rem'}
          left={['40vw']}
          top={'6rem'}
          justifyContent={'center'}
        >
          <h2 className='fh2'>Feedback</h2>
          <Input
            variant="flushed"
            placeholder="Name"
            type="text"
            colorScheme="facebook"
            required
          />
          <Input
            variant="flushed"
            placeholder="Email Id"
            type="email"
            colorScheme="facebook"
            required
          />
          <Input
            variant="flushed"
            placeholder="Subject"
            type='text'
            colorScheme="facebook"
            required
          />
          <Input
            variant="flushed"
            placeholder="Message"
            type='textbox'
            colorScheme="facebook"
            required
          />

          <Button colorScheme="twitter" m={'10'} variant={'solid'}>
            Submit
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default Feedback;
