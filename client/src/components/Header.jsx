import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSearch } from 'react-icons/im';

import {
  Box,
  VStack,
  theme,
  useDisclosure,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Input,
  useBoolean,
  Image,
  Stack,
} from '@chakra-ui/react';
import img2 from '../assets/homepage/zinikus.png';
import '../styles/header.css';
import img3 from '../assets/homepage/signUpButton.svg';
import img4 from '../assets/homepage/searchIcon.svg';
import Headerbtn from './Headerbtn';
import { BsFillTelephoneFill } from 'react-icons/bs';
import HeaderContent from './HeaderContent';
import { divide } from 'lodash';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { BsFillChatDotsFill } from "react-icons/bs";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    const { isOpen, onOpen, onClose } = useDisclosure()
  

    return (
      <div>
      {isMobile ? <Headerbtn /> : <HeaderContent />}
      <div className="phoneIcon">
        
        {/* <VerticallyCenter/> */}
        <button onClick={onOpen}><BsFillChatDotsFill size={"4vh"}/></button>
      </div>
  <div>
    

<Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Us</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <a href='mailto:adi.zinikus@gmail.com'>adi.zinikus@gmail.com</a>
          <br />
          <a href='mailto:tanay.zinikus@gmail.com'>tanay.zinikus@gmail.com</a>
        </div>
        <br/>
        <hr/>
        <br/>
        <div >
          <a href="tel:+91 98110031799">+91 9810031799</a>
          <br />
          <a href="tel:+91 7011995400">+91 7011995400</a>
        </div>
              
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        
  </div>
      </div>
    
  );
};

// const Header = () => {
// const { isOpen, onOpen, onClose } = useDisclosure();
// const [showInput, setShowInput] = useState(false);

// const handleClick = () => {
//   setShowInput(true);
//   setShowInput(!showInput);
// };

// const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

// useEffect(() => {
// const handleResize = () => {
//   setIsMobile(window.innerWidth <= 768);
// };

// window.addEventListener('resize', handleResize);

// return () => {
//   window.removeEventListener('resize', handleResize);
// };
// }, []);
// return (
// <div className='borderb' >
{
  /* <div className="headerContainer"></div>
      <div className="header">

          <Button
          color="white"
          backgroundColor="transparent"
          variant="solid"
          pos="fixed"
          zIndex={'10'}
          top={'3.5vh'}
          left={['3', '10']}
          onClick={onOpen}
          backdropFilter={'auto'}
        >
          <GiHamburgerMenu />
        </Button>

        <Drawer isOpen={isOpen} onClose={onClose} placement="left" className="drawer">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton onClick={onClose} />
            <DrawerHeader h="container.sm">
              <div>
                <Image src={img2} />
                <Button onClick={handleClick} colorScheme="facebook">
                  {' '}
                  <ImSearch onClick={!handleClick} />{' '}
                </Button>
                {showInput && (
                  <Input placeholder="Type here..." colorScheme="twitter" />
                )}
              </div>
            </DrawerHeader>
            <VStack className="links">
              <Button onClick={onClose} w="40" colorScheme="facebook" >
                <Link to={'/services'}>Our Services</Link>
              </Button>
              <Button onClick={onClose} w="40" colorScheme="facebook">
                <Link to={'/product'}>Products</Link>
              </Button>
              <Button onClick={onClose} w="40" colorScheme="facebook">
                <Link to={'/research'}>Research</Link>
              </Button> 
            </VStack>
            

            <Stack
              direction={['column', 'row']}
              className="ls"
              justifyContent="space-around"
            >
              <Button onClick={onClose} w="20" colorScheme="facebook">
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={onClose}
                w="20"
                colorScheme="facebook"
                variant="outline"
              >
            
                <Link to={'/signup'}>SignUp</Link>
              </Button>
            </Stack>
          </DrawerContent>
        </Drawer>
        
      </div>
      
<div className="flex">
      <div>
        <Link to={'/'}><Image src={img2} className="mainLogo" pos={'absolute'} top={'0.3'} /></Link>
      </div>
</div>
      <hr className="headerHR" />
    </div> */
}

//     <div>
//       {isMobile ? <Headerbtn /> : <HeaderContent />}
//     </div>

// };
//   );
// };

export default Header;
