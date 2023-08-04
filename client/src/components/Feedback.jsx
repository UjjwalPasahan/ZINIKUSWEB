import React from 'react'
import { Button, Input , VStack } from '@chakra-ui/react'
import '../styles/login.css'
import {MdKeyboardBackspace} from 'react-icons/md'
import {Link} from 'react-router-dom'

const Feedback = () => {

  return (
  <>
   <div className='back' > 
  <Link to={'/'}>
  <MdKeyboardBackspace size={30}/>
  </Link>
  </div> 
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