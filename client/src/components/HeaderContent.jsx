import React, { useState } from 'react'
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
      <div className='headerContent'>
        <HStack className="links gap" w="100%">
          {/* <Button onClick={onClose} w="40" className='linkbtn' colorScheme="gray" variant={'ghost'}>
      <Link to={'/services'}>Our Services</Link>
    </Button>
    <Button onClick={onClose} w="40" className='linkbtn' colorScheme="facebook">
      <Link to={'/product'}>Products</Link>
    </Button>
    <Button onClick={onClose} w="40" className='linkbtn'  colorScheme="facebook">
      <Link to={'/research'}>Research</Link>
    </Button>  */}
          {/* <!--start button, nothing above this is necessary --> */}
          <div className="svg-wrapper">
            <div id="text">
              <a href=""><span height="40" width="150" className="spot">Services</span></a>
            </div>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
          </div>
          {/* <!--Next button --> */}
          <div className="svg-wrapper">
            <div id="text">
              <a href=""><span height="40" width="150" className="spot">Products</span></a>
            </div>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
          </div>
          {/* <!--Next button --> */}
          <div className="svg-wrapper">
            <div id="text">
              <a href=""><span height="40" width="150" className="spot">Research</span></a>
            </div>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
            </svg>
          </div>
          {/* <!--End button --> */}
          <div className="svg-wrapper">
            <div id="text textNews">
              <a href=""><span height="40" width="150" className="spot">Newsletter</span></a>
            </div>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape shapeNews" height="40" width="150" />
            </svg>
          </div>
          {/* <Button onClick={onClose} w="40" className='linkbtn newsbtn' colorScheme="facebook" variant={'unstyled'}>
            <Link to={'/newsletter'} className='btnborder'>Newsletter</Link>
          </Button> */}
        </HStack>


      </div>
      <div className="flex">
        <div>
          <Link to={'/'}><Image src={img2} className="mainLogo" pos={'absolute'} top={'0.5'} left={'3%'} /></Link>
        </div>
      </div>
      <hr className="headerHR" />
    </>
  )
}

export default HeaderContent