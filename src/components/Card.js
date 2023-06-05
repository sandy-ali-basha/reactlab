import { Heading, HStack, Image, Text, VStack, Stack, Box, ButtonGroup, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack maxW='md' borderRadius='lg' color="black" bg="white" >
    <Box>
      <Image
        src={imageSrc}
        alt={title}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3' px="3">
        <Heading size='md' >{title}</Heading>
        <Text>
          {description}
        </Text>
      </Stack>
    </Box>
    <div>
      <Button variant='ghost' colorScheme='black'>
        <HStack>
          <Text>Show More</Text><FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Button>
    </div>
  </VStack>;
};

export default Card;
