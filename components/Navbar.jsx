import React from 'react';
import Link from 'next/link';
import { Box, Heading, Flex } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <Box>
        <Flex minWidth='max-content' alignItems='center' gap='2' background='blue.500' h="50px" >
            <Link href="/"  hover="black">Rishi Raj</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experince</Link>
        </Flex>
    </Box>
  )
}

export default Navbar