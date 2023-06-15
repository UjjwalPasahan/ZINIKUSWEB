import React from 'react'
import img from '../assets/homepage/Subtract.png'
import { Box, Image, VStack,HStack, Button } from '@chakra-ui/react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import img3 from '../assets/homepage/bg.png'
import About from './About'

const Home = () => {
  return (
   <div className='home'> 
    <Box
  backgroundImage={img} 
  backgroundSize='cover'
  backgroundRepeat={'no-repeat'}
  w="100%" 
  h="85rem">

  <VStack pos='absolute' top={['32','72']} left={['15','60']}>
    <div className='hometext'>
      <h2>Translation by <br/> H.Rackham</h2>
      <h5>Sit nostrud officia eu adipisicing<br/> occaecat voluptate labore.</h5>
      <Button colorScheme='facebook' borderRadius='3xl' variant='outline' h='16' w='36' fontSize='3xl'><Link to='#login'>Login</Link></Button>
    </div>
  </VStack>
  
</Box>
  <About/>
 </div> )
}

export default Home