import React ,{useState}from 'react'
import {
    Box,
    VStack,
    HStack,
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
  import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from 'react-icons/im';
import img2 from '../assets/homepage/zinikus.png';
import '../styles/header.css';
import img3 from '../assets/homepage/signUpButton.svg';
import img4 from '../assets/homepage/searchIcon.svg';
const HeaderContent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showInput, setShowInput] = useState(false);
  
    const handleClick = () => {
      setShowInput(true);
      setShowInput(!showInput);
    };
  
  return (
    <>
    <div><HStack className="links gap" w="100%">
    <Button onClick={onClose} w="40" colorScheme="facebook" >
      <Link to={'/services'}>Our Services</Link>
    </Button>
    <Button onClick={onClose} w="40" colorScheme="facebook">
      <Link to={'/product'}>Products</Link>
    </Button>
    <Button onClick={onClose} w="40" colorScheme="facebook">
      <Link to={'/research'}>Research</Link>
    </Button> 
    <Button onClick={onClose} w="40" colorScheme="facebook" className='newsbtn'>
      <Link to={'/newsletter'}>Newsletter</Link>
    </Button> 
  </HStack>
  

  </div>
  <div className="flex">
      <div>
        <Link to={'/'}><Image src={img2} className="mainLogo" pos={'absolute'} top={'0.3'} left={'5%'} /></Link>
      </div>
</div>
      <hr className="headerHR" />
    </>
  )
}

export default HeaderContent