import React from 'react';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
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
import './styles/App.css'
import Header from './components/Header';

function App() {
  return(<div>
  <Router>
  <Header/>
    <Routes>
      <Route />
    </Routes>
  </Router>
  </div>);
}

export default App;
