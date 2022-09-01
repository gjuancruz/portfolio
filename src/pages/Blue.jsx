import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styles from './Blue.module.css'
import { Box, Button, Flex, Stack, Text, useMediaQuery, Tabs, TabList, TabPanels, Tab, TabPanel, Image, useBoolean } from "@chakra-ui/react"
import mooncinemaimg from '../assets/moon-cinema-0.jpg'
import appetiteimg from '../assets/pi-foods-1.jpg'
import weatherappimg from '../assets/weatherappimg.png'
const Blue = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const [flag, setFlag] = useBoolean()
    return (
        <motion.div
            key={1}
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{ type: "spring", stiffness: 75 }}
        >
            <Stack>
                <Flex alignSelf='center'>
                    <Link to='/'>
                        <Button colorScheme='twitter' variant='solid' >My bio</Button>
                    </Link>
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "6" : "0"}
                    alignSelf="flex-start">
                    <Text fontSize='4xl' fontWeigth='semibold'>Check out my </Text>
                    <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"> latest projects</Text>
                </Flex>
                <Tabs align='center'>
                    <TabList>
                        <Tab>Moon Cinema</Tab>
                        <Tab>APPetite</Tab>
                        <Tab>Weather App</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"> Moon Cinema</Text>
                            </Flex>
                            <Image 
                                borderRadius='20px'
                                onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}
                                src={mooncinemaimg}
                                alignSelf="center"
                            />
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"> APPetite</Text>
                            </Flex>
                            <Image
                                src={appetiteimg}
                                alignSelf="center"
                            />
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"> Weather App</Text>
                            </Flex>
                            <Image
                                src={weatherappimg}
                                alignSelf="center"
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex alignSelf='center'>
                    <Link to='/red'>
                        <Button colorScheme='twitter' variant='solid' m='2'>Contact</Button>
                    </Link>
                </Flex>
            </Stack>
        </motion.div>
    )
}
export default Blue;