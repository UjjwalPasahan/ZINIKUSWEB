import React from 'react';
import headImg from '../assets/homepage/mainImage.jpg';
import {
  Box,
  Image,
  VStack,
  HStack,
  Button,
  flexbox,
  Center,
  carousel,
  calc,
} from '@chakra-ui/react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import img3 from '../assets/homepage/bg.png';
import About from './About';
import Achievements from './Achievements';
import Footer from './Footer';
import team from '../data/teamdata.json';
import Team from './Team';


const Home = () => {
  return (
    <div className="wrapp">
      <div className="gradient">
        <div className="home">
          <div className="glassyEffect"></div>
          <Box
            className="headImage"
            backgroundImage={headImg}
            backgroundSize="cover"
            display="flex"
            zIndex="-150"
            justifyContent="center"
            backgroundPosition="60% 60%"
            backgroundRepeat={'no-repeat'}
            w="100%"
            h="50rem"
          >
            <div className="gradC1"></div>
            <div className="gradE1"></div>
            <VStack pos="absolute" top={['32', '56']} left={['15', '56']}>
              <div className="hometext">
                <h2>
                  Translation by <br /> H.Rackham
                </h2>
                <h5>
                  Sit nostrud officia eu adipisicing
                  <br /> occaecat voluptate labore.
                </h5>
                <Button
                  colorScheme="grey"
                  borderRadius="3xl"
                  variant="outline"
                  h="12"
                  w="36"
                  fontSize="2xl"
                >
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </VStack>
          </Box>
          <div className="spaceMaker"></div>
          <div className="lowerSpaceMaker"></div>
          <div className="gradC1"></div>
          <div className="gradE1"></div>
          <About />
          <div className="gradC1"></div>
            <div className="gradE1"></div>
          <div id='ourteam'><h2 className='teamheading'>OUR TEAM</h2></div>
          {team.map(element => {
            return (
              <Team
                name={element.name}
                image={element.image}
                working
                area={element.working_area}
                description={element.description}
              />
            );
          })}
          <div className="gradC1"></div>
          <div className="gradE1"></div>
          <Achievements />
          <div className="gradC1"></div>
          <div className="gradE1" style={{maxHeight: '17.88vh'}}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
