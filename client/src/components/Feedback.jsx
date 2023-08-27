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
  const handleStarClick = selectedRating => {
    setRating(selectedRating);
    localStorage.setItem('rating', selectedRating);
  };

  const [form, setForm] = useState({});
  const handleForm = e => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/zinikusFeedback', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          rating: rating,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);

      // Clear form fields after successful submission
      setForm({});
      setRating(0); // Reset the rating
      // Show an alert after data is stored successfully
      alert('Data stored successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/zinikusFeedback', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // const [form, setForm] = useState({}); // Object to store form data

  // const handleForm = e => {
  //   console.log(e.target.value, e.target.name);
  //   form[e.target.name] = e.target.value;
  // };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8080/zinikusFeedback', {
  //       method: 'POST',
  //       body: JSON.stringify(form),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     // Clear form fields after successful submission
  //     for (const key in form) {
  //       if (form.hasOwnProperty(key)) {
  //         form[key] = '';
  //       }
  //     }

  //     // Show an alert after data is stored successfully
  //     alert('Data stored successfully');
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  // const getUsers = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/zinikusFeedback', {
  //       method: 'GET',
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="backgroundimg">
      <div className="back">
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div
        className="login"
        // style={{ marginBottom: '30rem' }}
      >
        <form className="feedbackForm" onSubmit={handleSubmit}>
          <VStack
            className="feedbackContent"
            spacing={'1.5'}
            w={'72'}
            pos={'absolute'}
            marginBlock={'2rem'}
            left={['40vw']}
            top={'6rem'}
            justifyContent={'center'}
          >
            <h2 className="fh2">Feedback</h2>
            <Input
              variant="flushed"
              name="name"
              placeholder="Name"
              value={form.name || ''}
              onChange={handleForm}
              type="text"
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name="email"
              placeholder="Email Id"
              value={form.email || ''}
              onChange={handleForm}
              type="email"
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name="opinions"
              placeholder="What did you like the best?"
              value={form.opinions || ''}
              onChange={handleForm}
              type="text"
              colorScheme="facebook"
              required
            />
            <Input
              variant="flushed"
              name="suggestions"
              placeholder="How can we improve?"
              value={form.suggestions || ''}
              onChange={handleForm}
              type="textbox"
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

            <Button
              type="submit"
              colorScheme="twitter"
              m={'10px'}
              variant={'solid'}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
