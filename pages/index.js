// import Head from 'next/head'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google';
import { Box, Flex, Grid, GridItem, Image , Text, Button} from '@chakra-ui/react';
import Link from 'next/link';
import axios from 'axios';
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  // console.log(data);
  const router = useRouter();
  let {html_url} = data;
  const seeResume = () => {
    <a href="html_url"></a>
  }

  const followMe = () => {
    <a href="https://github.com/RRBhardwaj">Profile</a>
  }

  return (
    <>
      <Box>
        <Grid
          h='100vh'
          templateRows='repeat(9, 1fr)'
          templateColumns='repeat(6, 1fr)'
          gap={4}
          justifyContent="center"
          marginTop="15px"
          marginLeft="10px"
          marginRight="10px"
          marginBottom="10px"
        >
          <GridItem rowSpan={4} colSpan={2} bg='tomato' color="white" >
            <Image src="https://avatars.githubusercontent.com/u/96867903?s=400&u=62dcd553348463d17e1af34152ddb48d55469486&v=4" alt="My Image" heaight="150px" width="120px" borderRadius="50%" marginLeft="25%"></Image>
            <Box alignItems="center" justify-content="center" margin="8px 5px 5px 5px">
              <Text as='b' fontSize="xl" marginLeft="18%">Rishi Raj Bhardwaj</Text>
              <Text justifyContent="space-between">FULL STACK WEB DEVELOPER | HTML | CSS | JAVASCRIPT | REACT | REDUX | BOOTSTRAP | CHAKRA-UI</Text>
              <Flex justifyContent="space-around" marginTop="10px">
                <Button colorScheme='teal' variant='outline' onClick={() =>seeResume()}>Resume</Button>
                <Button colorScheme='teal' variant='outline' onClick={followMe}>Follow</Button>
              </Flex>
            </Box>
          </GridItem>
          <GridItem rowSpan={9} colSpan={4} bg='papayawhip'>
            
          </GridItem>
          <GridItem rowSpan={2} colSpan={2} bg='papayawhip' padding="30px 15px 20px 15px" justifyContent="space-between">
            <Text color="teal.400" gap="5px">HTML | CSS | JAVASCRIPT | BOOTSTRAP | NPM | JSON-SERVER | REACT | REDUX | NEXTJS | CHAKRA-UI</Text>
          </GridItem>
          <GridItem rowSpan={3} colSpan={2} bg='teal'>
              <Text fontSize='xl' color='white'>Masai School</Text>
              <Text color="white">June2022 - Present</Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export async function getStaticProps(){
  let res = await  axios.get(`https://api.github.com/users/rrbhardwaj`)
  return{
      props:{
          data: res.data,
      }
  }
}
