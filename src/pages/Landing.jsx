import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import { Box, Flex, Image, Stack, Text, useMediaQuery, Circle, Button, HStack, UnorderedList, ListItem, List, VStack } from "@chakra-ui/react"
import image from '../assets/100711449.jpg'
import csslogo from '../assets/csss.png'
import jslogo from '../assets/js.png'
import nodelogo from '../assets/node.png'
import reactlogo from '../assets/react.png'
import htmllogo from '../assets/html.png'
import postgrelogo from '../assets/postgre.png'

const Landing = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    return (
        // <AnimatePresence>
        <motion.div
            key={2}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ type: "spring", stiffness: 75 }}

        >

            <Stack>

                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"} mb={isNotSmallerScreen ? '-12vh' : "0"} ml={isNotSmallerScreen ? '10vw' : "0"}
                    alignSelf="flex-start">
                    <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
                        <Text fontSize='5xl' fontWeigth='semibold'>Hey there! I'm </Text>


                        <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Juan Cruz Galaz</Text>


                        <Text color='gray.500'>Full Stack Web Developer</Text>
                        {/* <Link to='/blue'>
                            <button>blue</button>
                        </Link>
                        <Link to='/red'>
                            <button>red</button>
                        </Link> */}
                    </Box>

                    <Box mt={isNotSmallerScreen ? "0" : "16"} align="center" pl={isNotSmallerScreen ? "32" : '0'}>
                        <Image
                            src={image}
                            alignSelf="center"
                            mb={isNotSmallerScreen ? "0" : "12"}
                            borderRadius="full"
                            boxShadow="1g"
                            backgroundColor="transparent"
                            boxSize="200px"
                            position="absolute"
                            zIndex={99}
                        />
                        <Circle bg="blue.300" opacity="0.4"
                            w="200px" h="200px" alignItems="flex-end" m={'2'} 
                        />

                    </Box>



                </Flex>
                <Flex flexDirection='row' alignItems="center" justifyContent="space-evenly">
                
                    <Image src={jslogo} width='125px' className={styles.prueba}/>
                    <Image src={csslogo} width='75px' className={styles.prueba}/>
                    <Image src={htmllogo} width='125px' className={styles.prueba}></Image>
                    <Image src={reactlogo} width='125px' className={styles.prueba}></Image>
                    <Image src={nodelogo} width='125px' className={styles.prueba}></Image>
                    <Image src={postgrelogo} width='125px' className={styles.prueba}></Image>
            </Flex>
                <Flex alignSelf="center" p='10'>
                    <Link to="/blue">
                        <Button colorScheme='twitter' variant='solid'>My projects</Button>
                    </Link>
                </Flex>
            </Stack>
            <Flex direction='row'>

            </Flex>
            
        </motion.div>

    )
}
export default Landing;