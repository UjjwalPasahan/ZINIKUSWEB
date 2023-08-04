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
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import './styles/App.css'
import Home from './components/Home';
import Feedback from './components/Feedback.jsx';
import Signup from './components/signup'
import Products from './components/Products';
import Service from './components/Service'
import darkTheme from "./components/darkTheme";
import Research from './components/Research';
import TermsConditions from './components/TermsConditions';
import Error from './components/Error';
function App() {

  return(<div>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Products />} />
      <Route path='/services' element={<Service />} />
      <Route path='/research' element={<Research />} />
      <Route path='/termsConditions' element={<TermsConditions />} />
      <Route path='/Error' element={<Error />} />
    </Routes>
  </Router>
  </div>);
}

export default App;
