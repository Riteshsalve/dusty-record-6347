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
    Image,
    Heading
  } from '@chakra-ui/react';
import img1 from "../Images/heart.jpg"

function Headers(){
return <>
<Box className='first_class'  width="95%" height={500} alignItems="center" margin="auto" bg={useColorModeValue(' #FFEBEB', 'gray.800') } border={"2px"}>
  <Box  display={"flex"}  margin={'auto'}  width="100%" height="50%"  mt="50px"
           >
     <Box marginLeft={10}>
<Heading as="h1" size="4xl"  fontFamily="serif" align="left" >
DIAGNOSTIC
</Heading>
<Heading as="h1" size="4xl"  fontFamily="serif" align="left" >
EXPERT SYSTEM<span  style={
    {fontSize:"29px",fontWeight:"bold",color:"blue"}
  }>•</span>
</Heading>
</Box>
<Button bg={'#5A79F5'} width={200} margin={'auto'}  marginRight={50} >Start Program</Button>
</Box>
<Box   display={"flex"}  justifyContent={'space-around'}  marginLeft={10} marginTop={-10} height="50%" >
{/* <Flex > */}
<Text>We develop revolutionary technologies <br /> with delivering quality <br />healthcare through medical technology </Text>
<Image marginBottom={15} src={img1}/>
</Box>
</Box>

<Box margin={'auto'} width="92%" marginTop={4} borderRadius={10} bgColor={'#5A79F5'} display={'flex'} justifyContent={'space-around'}>
  <Button bgColor={'#5A79F5'} color={"white"} >Our Technology ➕</Button>
  <Button bgColor={'#5A79F5'} color={"white"}>Our Technology ➕</Button>
  <Button bgColor={'#5A79F5'} color={"white"}>Our Technology ➕</Button>
  <Button bgColor={'#5A79F5'} color={"white"}>Our Technology ➕</Button>
</Box>

{/* <Box>
  <Heading as="h1">Our Experties </Heading>
  <Heading as="h1">Our Experties </Heading>
  <Heading  as="h1">.</Heading>
</Box> */}
<div style={{marginTop:"8px"}} >
  <h1 style={
    {fontSize:"35px",fontWeight:"bold"}
  }>Our Experties <span  style={
    {fontSize:"29px",fontWeight:"bold",color:"blue"}
  }>•</span> </h1>
  
</div>

{/* <Center> */}
<div style={{width:"92%" ,margin:"auto",marginTop:"8px"}}>
<div  style={{ width:"100%" , margin:"auto", display:"grid" , gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",}}>
  <div  style={{display:"flex" ,width:"100%",height:"160px",padding:"10px",  margin:"auto" ,backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
    <img src="https://img.freepik.com/free-photo/human-helix-dna-structure-concept-blue-color_90220-1399.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"40%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    <Center w='50%' bg='#F7DDF7' >
    <Text fontSize={"2xl"} fontFamily={"sans-serif"} >Genomics</Text>
  </Center>
  </div>
  <div  style={{display:"flex" ,width:"100%",height:"150px",padding:"10px", margin:"auto" ,backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
    <img src="https://img.freepik.com/free-photo/medicine-container-spills-colorful-pills-background-generative-ai_188544-12527.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"40%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    <Center w='50%' >
    <Text fontSize={"2xl"} fontFamily={"sans-serif"} >Chemistry</Text>
  </Center>
  </div>
  <div  style={{display:"flex" ,width:"100%",height:"150px",padding:"10px", margin:"auto",backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
    <img src="https://img.freepik.com/free-photo/hand-shaking-hand-with-word-it-bottom_1340-31627.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"40%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    <Center w='50%' >
    <Text fontSize={"2xl"} fontFamily={"sans-serif"} >Bionics</Text>
  </Center>
  </div>
  <div  style={{display:"flex" ,width:"100%",height:"150px",padding:"10px", margin:"auto",backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
    <img src="https://img.freepik.com/free-photo/vaccine-bottle-syringe-held-by-doctor-with-gloves_23-2148801400.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"40%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    <Center w='50%' >
    <Text fontSize={"2xl"} fontFamily={"sans-serif"} >Genetics</Text>
  </Center>
  </div>

 
</div>
</div>

<div style={{marginTop:"8px"}} >
  <h1 style={
    {fontSize:"35px",fontWeight:"bold"}
  }>Our Methodology <span  style={
    {fontSize:"29px",fontWeight:"bold",color:"blue"}
  }>.</span> </h1>
  
</div>





<div style={{width:"92%" ,margin:"auto",marginTop:"8px"}}>
<div  style={{ width:"100%" , margin:"auto", display:"grid" , gridTemplateColumns:"repeat(1, 1fr)",gap:"20px",}}>
  <div  style={{display:"flex", justifyContent:"space-between" ,width:"100%",height:"160px",padding:"10px",  margin:"auto" ,backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
  <Center w='50%' bg='#F7DDF7' >
    <Text fontSize={"3xl"} fontFamily={"sans-serif"} >     <span style={{fontSize:"29px",fontWeight:"bold",color:"blue"}}>⦿</span>  Labrotary Exercises 1</Text>
  </Center>
    <img src="https://img.freepik.com/free-photo/human-helix-dna-structure-concept-blue-color_90220-1399.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"30%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    
  </div>
  <div  style={{display:"flex" , justifyContent:"space-between" ,width:"100%",height:"150px",padding:"10px", margin:"auto" ,backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
  <Center w='50%'  >
    <Text fontSize={"3xl"} fontFamily={"sans-serif"}  >   <span style={{fontSize:"29px",fontWeight:"bold",color:"blue"}}>⦿</span> Labrotary Exercises 2</Text>
  </Center>
    <img src="https://img.freepik.com/free-photo/medicine-container-spills-colorful-pills-background-generative-ai_188544-12527.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"30%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
    
  </div>
  <div  style={{display:"flex" , justifyContent:"space-between" ,width:"100%",height:"150px",padding:"10px", margin:"auto",backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
  <Center w='50%' >
    <Text fontSize={"3xl"} fontFamily={"sans-serif"} > <span style={{fontSize:"29px",fontWeight:"bold",color:"blue"}}>⦿</span> Labrotary Exercises 3</Text>
  </Center>
    <img src="https://img.freepik.com/free-photo/hand-shaking-hand-with-word-it-bottom_1340-31627.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"30%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
   
  </div>
  <div  style={{display:"flex" , justifyContent:"space-between" ,width:"100%",height:"150px",padding:"10px", margin:"auto",backgroundColor:"#F7DDF7",borderRadius:"20px",border:"2px solid white"}} >
  <Center w='50%' >
    <Text fontSize={"3xl"} fontFamily={"sans-serif"} > <span style={{fontSize:"29px",fontWeight:"bold",color:"blue"}}> ⦿</span> Labrotary Exercises 4</Text>
  </Center>
    <img src="https://img.freepik.com/free-photo/vaccine-bottle-syringe-held-by-doctor-with-gloves_23-2148801400.jpg?size=626&ext=jpg&ga=GA1.1.494466966.1683201009&semt=sph" alt=""style={{width:"30%",borderRadius:"10px"}} />
    {/* <h1>Genomics</h1> */}
   
  </div>

 
</div>
</div>

{/* +++++++++START Program Now+++++++ */}

<Box margin={'auto'} width="92%" marginTop={4} borderRadius={10} bgColor={'#5A79F5'} display={'flex'} justifyContent={'space-around'}>
  <Button bgColor={'#5A79F5'}  color={"white"}>Start Program Now ➕</Button>
  <Button bgColor={'#5A79F5'} color={"white"}>Start Program Now ➕</Button>
  <Button bgColor={'#5A79F5'} color={"white"}>Start Program Now ➕</Button>
  {/* <Button bgColor={'blue'}>Our Technology +</Button> */}
</Box>
{/* </Center> */}
</>
}
export default Headers