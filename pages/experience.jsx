import React from 'react';
import { Box,Grid, GridItem, Text} from '@chakra-ui/react';


const Experience = () => {
  return (
    <Box margin="10px" color="white">
        <Grid
            h='300px'
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
            width="600px"
            >
            <GridItem rowSpan={2} colSpan={2} bg='teal'>
                <Text fontSize='xl'>Masai School</Text>
                <Text>June2022 - Present</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='teal'>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2} bg='teal'></GridItem>
            </Grid>
    </Box>
  )
}


export default Experience