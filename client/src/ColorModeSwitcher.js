import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      pos='fixed'
      right={['3','10']}
      top={'15'}
      aria-label={`Switch to ${text} mode`}
      variant="solid"
      color="current"
      marginLeft="2"
      zIndex={'10'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
