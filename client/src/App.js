import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles/App.css'

function App() {
  return(<div className='hi'>
    <Button color='white' backgroundColor='transparent' variant='solid'>
      <GiHamburgerMenu/>
    </Button>
  </div>);
}

export default App;
