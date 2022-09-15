import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styles from './Blue.module.css'
import { Box, Button, Flex, Stack, Text, useMediaQuery, Tabs, TabList, TabPanels, Tab, TabPanel, Image, useBoolean, VStack, HStack, Icon } from "@chakra-ui/react"
import {ArrowForwardIcon, ArrowBackIcon, ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'
import mooncinemaimg from '../assets/moon-cinema-0.jpg'
import appetiteimg from '../assets/pi-foods-0.jpg'
import appetiteimg2 from '../assets/pi-foods-1.jpg'
import appetiteimg3 from '../assets/pi-foods-3.jpg'

import weatherappimg from '../assets/weatherappimg.png'
const Blue = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const [flag, setFlag] = useBoolean()
    const [imagecount, setImagecount] = useState(0)
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
                        <Button colorScheme='twitter' variant='solid' >My bio  <Icon as={ArrowUpIcon} /></Button>
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
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> Moon Cinema</Text>
                            </Flex>
                            <iframe width={isNotSmallerScreen? "560" : '360' } height={isNotSmallerScreen ? "315" : '315'} src="https://www.youtube.com/embed/zadB0K5Brzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> APPetite</Text>
                            </Flex>
                            <HStack justifyContent='center'>
                                {(imagecount === 0) && <Button disabled><Icon as={ArrowBackIcon} /></Button>}
                                {(imagecount > 0) && <Button onClick={() => setImagecount(imagecount - 1)}><Icon as={ArrowBackIcon} /></Button>}
                                <a target="_blank" href="https://pi-foods-seven.vercel.app/">
                                <motion.img
                                    src={((imagecount === 0) && appetiteimg) || ((imagecount === 1) && appetiteimg2) || ((imagecount === 2) && appetiteimg3)}
                                    width="560" height="315"
                                    key={imagecount}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 75 }}
                                />
                                </a>
                                {(imagecount < 2) && <Button onClick={() => setImagecount(imagecount + 1)}><Icon as={ArrowForwardIcon} /></Button>}
                                {(imagecount === 2) && <Button disabled><Icon as={ArrowForwardIcon} /></Button>}
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> Weather App</Text>
                            </Flex>
                            <a target="_blank" href="https://weather-app-gjuancruz.vercel.app/">
                            <Image
                                src={weatherappimg}
                                alignSelf="center"
                                width="560"
                                height={isNotSmallerScreen ? "270" :'130'}
                            />
                            </a>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex alignSelf='center'>
                    <Link to='/red'>
                        <Button colorScheme='twitter' variant='solid' m='2'>Contact  <Icon as={ArrowDownIcon} /></Button>
                    </Link>
                </Flex>
            </Stack>
        </motion.div>
    )
}
export default Blue;