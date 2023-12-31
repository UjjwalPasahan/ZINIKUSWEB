import React, { useEffect, useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';
import '../styles/news.css';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

const signup = () => {
  const [form, setForm] = useState({});
  const handleForm = e => {
    console.log(e.target.value, e.target.name);
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('https://zinikusweb-server.vercel.app/zinikus', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    // Clear form fields after successful submission
    setForm({});
    // Reset the checkbox directly in the DOM (uncontrolled component)
    const checkboxElement = document.querySelector('input[name="tick"]');
    if (checkboxElement) {
      checkboxElement.checked = false;
    }
    // Show an alert after data is stored successfully
    alert('Data stored successfully');
  };
  const getUsers = async () => {
    const response = await fetch('https://zinikusweb-server.vercel.app/zinikus', {
      method: 'GET',
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="newspage" id="newsletter">
      <div className="back backbtn" style={{ color: 'white' }}>
        <Link to={'/'}>
          <MdKeyboardBackspace size={30} />
        </Link>
      </div>
      <div className="news">
        <form className="newsletterForm" onSubmit={handleSubmit}>
          <VStack
            className="newsletterContent"
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
              name="name"
              placeholder="Name*"
              value={form.name || ''}
              onChange={handleForm}
              type="text"
              colorScheme="facebook"
              required
            />
            {/* <label className="loginlabel">EmailID</label> */}
            <Input
              variant="flushed"
              name="email"
              placeholder="E-mail*"
              value={form.email || ''}
              onChange={handleForm}
              type="email"
              colorScheme="facebook"
              required
            />
            {/* <label className="loginlabel">Mobile number</label> */}
            <Input
              variant="flushed"
              name="phone"
              placeholder="Mobile Number"
              value={form.phone || ''}
              onChange={handleForm}
              type="tel "
              colorScheme="facebook"
            />
            <div className="checkboxText">
              <input
                name="tick"
                type="checkbox"
                checked={form.tick || false} // Make sure it's controlled by the form state
                onChange={handleForm}
                style={{ marginRight: '2px' }}
              />
              I agree to receive emails from Zinikus pvt ltd. View our{' '}
              <a href="/TermsConditions" style={{ color: '#251b58' }}>
                terms of service.
              </a>
            </div>
            <Button
              type="submit"
              colorScheme="twitter"
              m={'10'}
              variant={'solid'}
            >
              Subscribe
            </Button>
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default signup;
