import React from 'react';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import styles from './Blue.module.css'
import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react"

const Blue = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')

        return (
            <motion.div 
            key={1}
            initial={{y:-1000, opacity: 0}}
            animate={{ y: 10, opacity: 1}}
            transition={{ type: "spring", stiffness: 75 }}
            >
                    <Stack>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                    alignSelf="flex-start">
                        <Box mt={isNotSmallerScreen? "0" : "16"} align="flex-start">
                            <Text fontSize='5xl' fontWeigth='semibold'>Texto de ejemplo</Text>
                            <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Lorem ipsum dolor</Text>
                            <Text fontSize='2xl'  color='gray.500'>sit amet porro meme ricca</Text>
                            <Link to='/'>
                        <button>landing</button>
                        </Link>
                        <Link to='/red'>
                        <button>red</button>
                        </Link>
                        </Box>
                </Flex>
            </Stack>
            </motion.div>
        )
    }
export default Blue;