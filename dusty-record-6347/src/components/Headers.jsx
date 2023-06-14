import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Center,
    Image
  } from '@chakra-ui/react';
//   import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } 

// import { Images } from '@chakra-ui/react';

function Headers(){
return <>
<Box width="99%" height={500} alignItems="center" margin="auto" bg={useColorModeValue(' #FFEBEB', 'gray.800') } border={"2px"}>
  <Box display={"flex"}  margin={'auto'}  width="100%" height="50%" >
     
<Text padding ="10px" fontSize={100} fontFamily="serif" align="left">
DIAGNOSTIC EXPERT SYSTEM.
</Text>
<Button bg={'blue'} width={200} margin={'auto'} marginRight={50}  >Start Program</Button>
</Box>
<Box display={"flex"} justifyContent={"space-around"}>
{/* <Flex > */}
<Text> </Text>
<Image boxSize='250px' src='https://img.freepik.com/free-vector/human-internal-organ-with-heart_1308-102764.jpg?w=740&t=st=1686758360~exp=1686758960~hmac=63b804624b543f9a311a0b3b131e04f804ad481570bd87871b9e4ef7627add8f' alt='Dan Abramov' />
{/* </Flex> */}
</Box>
</Box>



</>
}
export default Headers