import React from 'react'
import { Button, Input , VStack } from '@chakra-ui/react'
import '../styles/signup.css'

const signup = () => {
  return (
    <>
  <div>
    <h2 className='j'>j</h2>
  </div>
    <div class='login'>
      <VStack spacing={'1.5'} w={'72'} pos={'absolute'} left={['40%']} top={'56'}>
      <label className='logintext'>Login Form</label>
      <label className='loginlabel'>Username</label>
  <Input variant='filled' placeholder='username...' type='text' colorScheme='facebook'/>
  <label className='loginlabel'>EmailID</label>
  <Input variant='filled' placeholder='email...' type='email' colorScheme='facebook'/>
  <label className='loginlabel'>Password</label>
  <Input variant='filled' placeholder='password...' type='password' colorScheme='facebook'/>

  <Button colorScheme='facebook' m={'10'} variant={'ghost'}>Submit</Button>
</VStack>
    </div>
    </>
  )
}

export default signup