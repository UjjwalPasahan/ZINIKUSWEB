import React from 'react'
import { Input , Stack } from '@chakra-ui/react'

const login = () => {
  return (
    <div id='login'>
      <Stack spacing={3}>
  <Input variant='filled' placeholder='Filled' colorScheme='facebook'/>
  <Input variant='filled' placeholder='Filled' colorScheme='facebook'/>
</Stack>
    </div>
  )
}

export default login