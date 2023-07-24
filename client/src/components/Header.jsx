import React, { useState } from 'react';
import { Link, HashLink } from 'react-router-dom';
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
  Stack
} from '@chakra-ui/react';
import img2 from '../assets/homepage/zinikus.png'
import '../styles/header.css'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
    setShowInput(!showInput);
  }

  return (
     <div className='headerContainer'   
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   right: '0',
    //   bottom: '0',
    //   background: 'rgba(255, 255, 255, 0.25)',
    //   backdropFilter: 'blur(10px)',
    //   border: '1px solid rgba(255, 255, 255, 0.25)',
    //   borderRadius: '10px',
    //   padding: '20px',
    //   margin: '20px',
    >
  <div className='header' 
          // position: 'fixed',
          // top: '0',
          // left: '0',
          // right: '0',
          // height: '50px',
          // background: 'rgba(255, 255, 255, 0.8)',
          // zIndex: '100',
        >
    <Button
      color="white"
      backgroundColor="transparent"
      variant="solid"
      pos="fixed"
      zIndex='10'
      top={'15'}
      left={['3', '10']}
      onClick={onOpen}
      backdropFilter={'auto'}
    >
      <GiHamburgerMenu style={{zIndex:'100'}} />
    </Button>

    <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton onClick={onClose} />
        <DrawerHeader h='container.sm'>
          <div>
            <Image src={img2} />
            <Button onClick={handleClick} colorScheme='facebook'> <ImSearch onClick={!handleClick} /> </Button>
            {showInput && <Input placeholder='Type here...' colorScheme='facebook' />}
          </div>
        </DrawerHeader>
        <VStack className='links'>
          <Button onClick={onClose} w='40' colorScheme='facebook'><Link to={'/sevices'}>Our Services</Link></Button>
          <Button onClick={onClose} w='40' colorScheme='facebook'><Link to={'/team'}>Our Team</Link></Button>
          <Button onClick={onClose} w='40' colorScheme='facebook'><Link to={'/product'}>Products</Link></Button>
          <Button onClick={onClose} w='40' colorScheme='facebook'><Link to={'/contact'}>Contact Us</Link></Button>
        </VStack>

        <Stack direction={["column", "row"]} className='ls' justifyContent='space-around'>
          <Button onClick={onClose} w='20' colorScheme='facebook'><Link to={'/login'}>Login</Link></Button>
          <Button onClick={onClose} w='20' colorScheme='facebook' variant='outline'><Link to={'/signup'}>SignUp</Link></Button>
        </Stack>
      </DrawerContent>
    </Drawer>

    <div ><Image src={img2} className='mainLogo' pos={'fixed'} top={'0.5'} style={{zIndex:100}} /></div>

  </div>
    </div >
  );
};

export default Header;
