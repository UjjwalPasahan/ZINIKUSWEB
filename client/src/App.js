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
import Home from './components/Home';
import Login from './components/Login.jsx';
import Signup from './components/signup'
import Products from './components/Products';
import Team from './components/Team'
import Service from './components/Service'

function App() {
  return(<div>
  <Router>
  <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Products />} />
      <Route path='/team' element={<Team />} />
      <Route path='/product' element={<Products />} />
      <Route path='/service' element={<Service />} />
    </Routes>
  </Router>
  </div>);
}

export default App;
