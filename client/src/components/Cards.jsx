import React from 'react';
import Footer from './Footer.jsx';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Image,
  VStack,
  HStack,
  Button,
  flexbox,
  Center,
  carousel,
  calc,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react';
import '../data/productdata.json'
const Cards = (props) => {
  return (
    <div>
      <Card maxW="container.sm" >
        <CardBody maxH="container.md">
          <Image
            src={props.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width={'72'}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{props.name}</Heading>
            <Text>
              {props.description}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              {props.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Read more
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Footer />
    </div>
  );
};

export default Cards;
