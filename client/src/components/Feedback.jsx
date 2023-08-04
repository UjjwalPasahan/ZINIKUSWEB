import React from 'react'
import { Button, Input , VStack } from '@chakra-ui/react'
import '../styles/login.css'
import Footer from './Footer.jsx'
const Feedback = () => {
  return (
  <>
  {/* <div>
    <h2 className='j'>j</h2>
  </div> */}
    <div class='login' style={{marginBottom:'30rem'}}>
      <VStack spacing={'1.5'} w={'72'} pos={'absolute'} marginBlock={'2rem'} left={['40vw']} top={'6rem'} justifyContent={'center'}>
      <label className='logintext'>Feedback Form</label>
      <label className='loginlabel'>Username</label>
  <Input variant='flushed' placeholder='username...' type='text' colorScheme='facebook'/>
  <label className='loginlabel'>Email Id</label>
  <Input variant='flushed' placeholder='password...' type='Email Id' colorScheme='facebook'/>

  <Button colorScheme='facebook' m={'10'} variant={'solid'}>Submit</Button>
</VStack>
    </div>
    </>
  )
}

export default Feedback;