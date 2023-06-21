import React, { useState } from 'react';
import { Link ,HashLink } from 'react-router-dom';
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
  const [showInput,setShowInput] = useState(false);

  const handleClick = ()=>{
    setShowInput(true);
    setShowInput(!showInput);
  }

  return (
    <div className='headerTop'>
    <div className='header' >
      <Button
        color="white"
        backgroundColor="transparent"
        variant="solid"
        pos="fixed"
        top={'15'}
        left={['3', '10']}
        onClick={onOpen}
        backdropFilter={'auto'}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader h='container.sm'>
          <div>
            <Image src={img2}  />
            <Button onClick={handleClick} colorScheme='facebook'> <ImSearch onClick={!handleClick}/> </Button>
            {showInput && <Input placeholder='Type here...' colorScheme='facebook'/>}
          </div>
          </DrawerHeader>
          <VStack className='links'>
            <Button  onClick={onClose} w='40' colorScheme='facebook'><Link to={'/sevices'}>Our Services</Link></Button>
            <Button onClick={onClose}  w='40' colorScheme='facebook'><Link to={'/team'}>Our Team</Link></Button>
            <Button onClick={onClose}  w='40' colorScheme='facebook'><Link to={'/product'}>Products</Link></Button>
            <Button onClick={onClose}  w='40' colorScheme='facebook'><Link to={'/contact'}>Contact Us</Link></Button>
          </VStack>

          <Stack direction={["column","row"]} className='ls' justifyContent='space-around'>
            <Button onClick={onClose}  w='20' colorScheme='facebook'><Link to={'/login'}>Login</Link></Button>
            <Button onClick={onClose}  w='20' colorScheme='facebook' variant='outline'><Link to={'/signup'}>SignUp</Link></Button>
          </Stack>
        </DrawerContent>
      </Drawer>

      <div ><Image src={img2} className='mainLogo' /></div>
      
    </div>
    </div> 
  );
};

export default Header;
