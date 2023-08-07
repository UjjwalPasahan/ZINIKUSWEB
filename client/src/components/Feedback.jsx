import React from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';
import '../styles/feedback.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import {StarIcon} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

const Feedback = () => {
  
  const [rating, setRating] = useState(0);

  // Function to update the rating and store it in local storage
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    localStorage.setItem('rating', selectedRating);
  };
  return (
    <div className="backgroundimg">
      <div className="back">
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div className="login" 
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
            placeholder="What did you like the best?"
            type='text'
            colorScheme="facebook"
            required
          />
          <Input
            variant="flushed"
            placeholder="How can we improve?"
            type='textbox'
            colorScheme="facebook"
            required
          />

<div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: index < rating ? '#2b00ff' : 'black',
          }}
          onClick={() => handleStarClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>


          <Button colorScheme="twitter" m={'10px'} variant={'solid'}>
            Submit
          </Button>
        </VStack>
      </div>
    </div>
  );
};


export default Feedback

