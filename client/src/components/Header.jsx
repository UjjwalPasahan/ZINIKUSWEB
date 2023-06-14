import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Box,
  VStack,
  theme,
  useDisclosure,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
} from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        color="white"
        backgroundColor="transparent"
        variant="solid"
        pos="fixed"
        top={'15'}
        left={['3', '10']}
        onClick={onOpen}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader></DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
