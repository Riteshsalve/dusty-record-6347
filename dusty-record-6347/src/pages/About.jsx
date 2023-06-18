import React from 'react';
import {
  Box,
  Heading,
  Image,
  Flex,
  Tag,
  Text,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  AspectRatio,
  Button,
} from '@chakra-ui/react';
import img1 from '../Images/about.png';
const About = () => {
  return (
    <Box m="100px">
      {/* <Flex direction={{base:"column" , sm:"column" , md:"column" , lg:"row", xl : "row" , "2xl" : "row"}}> */}
        {/* <Box>
          <Box color={'#222566'}>
            <Heading color={'#222566'} as="h1" size="xl" fontWeight={"light"}>The Best</Heading>
            <Heading color={'#222566'}>The HealthCare Services</Heading>
            <Text>We offer the best healthcare consultation
              <br/> for you and your family</Text>
              <Box mt="10px"> 
                <Button color={"white"} bg={'#222566'}>Book Now</Button>
                <Text>www.mediverse.com</Text>
                <Text>For any queries Contact us : 9878786887</Text>
                <Text>Email :mediverse@caregmail.com</Text>
              </Box>
          </Box>
          <Box>
          <Image src={img1} />

          </Box> */}
        {/* </Box> */}
        <Box p="20px" textAlign={'center'}>
          <Tag  variant="outline" color={'#5A79F5'} p="10px" size={'lg'}>
            <Heading >About Us!</Heading>
          </Tag>
          <Image src={img1} />
          <Text mt="10px" lineHeight={'30px'}>
            <Text>RS Dignostic Centre</Text>
            Lorem ipsum dolor, sit amet consectetur
            <br />
            adipisicing elit. Mollitia ex quibusdam adipisci
            <br />
            voluptate debitis, sunt excepturi iure
            <br />
            obcaecati culpa amet reiciendis est delectus!
            <br /> Perferendis, molestiae corrupti. Illo et
            <br /> ipsum temporibus?Lorem ipsum dolor sit, amet consectetur
            <br /> adipisicing elit. Qui, ullam in? Culpa quod cupiditate
            voluptate? Distinctio eum provident quaerat officia.
          </Text>
          <Box w={{base:"300px" , sm:"300px" , md:"400px" , lg:"500px" , xl:"500px" , "2xl" : "500px"}} m={{base : "auto"}} mt="20px">
          </Box>
        </Box>
      {/* </Flex> */}
    </Box>
  );
};

export default About;
