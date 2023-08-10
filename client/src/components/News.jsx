import React, { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import '../styles/news.css';
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const{name,email,phone} = user;

    const res = await fetch(
      "https://testing-55e7d-default-rtdb.firebaseio.com/praticeNewsletter.json"
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      }
    );
      if(res){
        setUser({
          name: "",
          email: "",
          phone: "",
        });
        alert("Data Stored Successfully!");

      }
  };

  return (
    <div className="newspage" id='newsletter'>
      <div className='back backbtn' >
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div className="news">
        <form className='newsletterForm' method='POST'>
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
              name='name'
              placeholder="Name*"
              value={user.name}
              onChange={getUserData}
              type="text"
              colorScheme="facebook"
              required
            />
            {/* <label className="loginlabel">EmailID</label> */}
            <Input
              variant="flushed"
              name='email'
              placeholder="E-mail*"
              value={user.email}
              onChange={getUserData}
              type="email"
              colorScheme="facebook"
              required
            />
            {/* <label className="loginlabel">Mobile number</label> */}
            <Input
              variant="flushed"
              name='phone'
              placeholder="Mobile Number"
              value={user.phone}
              onChange={getUserData}
              type="tel "
              colorScheme="facebook"
            />
            <div className='checkboxText'>
              <input value="test" type="checkbox" />
              I agree to receive emails from Zinikus pvt ltd.
              View our <a href="/TermsConditions" style={{ color: "Blue" }}>terms of service.</a></div>
            <Button colorScheme="twitter" m={'10'} variant={'solid'} onClick={postData}>
              Subscribe
            </Button>
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default signup;
