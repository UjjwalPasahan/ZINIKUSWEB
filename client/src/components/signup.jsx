import React from 'react'
import { Box, Button, Input, VStack } from '@chakra-ui/react'
import '../styles/signup.css'

const signup = () => {
  return (
    <div className='signUppage'>
      <div class='signUp'>
        <VStack spacing={'1.5'} w={'72'} pos={'absolute'} left={['40%']} top={'56'}>
          <label className='logintext'>SignUp Form</label>
          <label className='loginlabel'>Username</label>
          <Input variant='filled' placeholder='username...' type='text' colorScheme='facebook' />
          <label className='loginlabel'>EmailID</label>
          <Input variant='filled' placeholder='email...' type='email' colorScheme='facebook' />
          <label className='loginlabel'>Mobile number</label>
          <Input variant='filled' placeholder='password...' type='tel ' colorScheme='facebook' />
          <label className='loginlabel'>Password</label>
          <Input variant='filled' placeholder='password...' type='password' colorScheme='facebook' />
          <Button   colorScheme='facebook' m={'10'} variant={'ghost'}>Submit</Button>
        </VStack>
      </div>
    </div>

  )
}

export default signup