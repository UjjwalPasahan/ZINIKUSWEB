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

  //uploading the data to firebase

  const [user, setUser] = useState({
    name: "",
    email: "",
    opinions: "",
    suggestions: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email,opinions,suggestions } = user;

    const res = await fetch(
      "https://testing-55e7d-default-rtdb.firebaseio.com/praticeFeedback.json"
      , {
        method: "POST",
        headers: {
          "Content-Type": "app/json",
        },
        body: JSON.stringify({
          name,
          email,
          opinions,
          suggestions,
        }),
      }
    );
    if (res) {
      setUser({
        name: "",
        email: "",
        opinions: "",
        suggestions:"",
      });
      alert("Data Stored Successfully!");

    }
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
        <form className='feedbackForm' method='POST'>
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
              name='name'
              placeholder="Name"
              value={user.name}
              onChange={getUserData}
              type="text"
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name='email'
              placeholder="Email Id"
              value={user.email}
              onChange={getUserData}
              type="email"
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name='opinions'
              placeholder="What did you like the best?"
              value={user.opinions}
              onChange={getUserData}
              type='text'
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name='suggestions'
              placeholder="How can we improve?"
              value={user.suggestions}
              onChange={getUserData}
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
                    color: index < rating ? 'gold' : 'black',
                  }}
                  onClick={() => handleStarClick(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>


            <Button colorScheme="twitter" m={'10px'} variant={'solid'} onClick={postData}>
              Submit
            </Button>
          </VStack>
        </form>
      </div>
    </div>
  );
};


export default Feedback;

