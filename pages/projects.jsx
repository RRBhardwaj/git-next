import React, {useState} from 'react';
import axios from 'axios';
import { Box,Heading,Text } from '@chakra-ui/react';

const Projects = ({data}) => {
    const [products, setProducts] = useState(data);
  return (
    <Box margin="10px">
        <Text>Projects</Text>
        <Box>
            {
                products?.map((item)=>{
                    console.log(item.name, item.full_name);
                    <Text>{item.name} - {item.full_name}</Text>
                })
            }
        </Box>
    </Box>
  )
}

export async function getStaticProps(){
    let res = await  axios.get(`https://api.github.com/search/repositories?q=user:rrbhardwaj+fork:true&sort=updated&per_page=10&type=Repositories`)
    return{
        props:{
            data: res.data.items,
        }
    }
}


export default Projects