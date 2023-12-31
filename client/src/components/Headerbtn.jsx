import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from 'react-icons/im';
import img2 from '../assets/homepage/zinikus.png';
import '../styles/header.css';
import img3 from '../assets/homepage/signUpButton.svg';
import img4 from '../assets/homepage/searchIcon.svg';
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

const Headerbtn = () => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [showInput, setShowInput] = useState(false);
      
        const handleClick = () => {
          setShowInput(true);
          setShowInput(!showInput);
        };
      
        return (
          <div className='borderb' >
            <div className="headerContainer"></div>
            <div className="header">
            
                <Button
                color="#702fff"
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
                    </div>
                  </DrawerHeader>
                  <VStack className="links">
                    <Button onClick={onClose} top={'40'} w="40" colorScheme="facebook" >
                      <Link to={'/services'}>Our Services</Link>
                    </Button>
                    <Button onClick={onClose} top={'40'} w="40" colorScheme="facebook">
                      <Link to={'/product'}>Products</Link>
                    </Button>
                    <Button onClick={onClose} top={'40'} w="40" colorScheme="facebook">
                      <Link to={'/research'}>Research</Link>
                    </Button> 
                    <Button onClick={onClose} top={'40'} w="40" colorScheme="facebook">
                      <Link to={'/newsletter'}>Newsletter</Link>
                    </Button>  
                  </VStack>
                  
      
                  {/* <Stack
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
                  
                      <Link to={'/signup'}>SignUp</Link> */}
                    {/* </Button>
                  </Stack> */}
                </DrawerContent>
              </Drawer>
              
            </div>
            
      <div className="flex">
            <div>
              <Link to={'/'}><Image src={img2} className="mainLogo" pos={'absolute'} top={'0.3'} /></Link>
            </div>
      </div>
            <hr className="headerHR" />
          </div>
        );
      };
      

export default Headerbtn;