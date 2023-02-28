import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import styles from './Blue.module.css'
import { Box, Button, Flex, Stack, Text, useMediaQuery, Tabs, TabList, TabPanels, Tab, TabPanel, Image, useBoolean, VStack, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react"
import { ArrowForwardIcon, ArrowBackIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import appetiteimg from '../assets/pi-foods-0-min.jpg'
import appetiteimg2 from '../assets/pi-foods-1-min.jpg'
import appetiteimg3 from '../assets/pi-foods-3-min.jpg'

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
                    p="2"
                    align={isNotSmallerScreen ? "flex-start" : "center"}
                    width='100%'>
                    <Text fontSize='4xl' fontWeigth='semibold'>Check out my </Text>
                    <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">latest projects</Text>

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
                            <iframe width={isNotSmallerScreen ? "560" : '360'} height={isNotSmallerScreen ? "315" : '315'} src="https://www.youtube.com/embed/zadB0K5Brzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </TabPanel>
                        <TabPanel>
                            <Flex justifyContent="center">
                                <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                                <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> APPetite</Text>
                            </Flex>
                            <HStack justifyContent='center' >
                                {(imagecount === 0) && <Button disabled><Icon as={ArrowBackIcon} /></Button>}
                                {(imagecount > 0) && <Button onClick={() => setImagecount(imagecount - 1)}><Icon as={ArrowBackIcon} /></Button>}
                                <div className={styles.container}>

                                    <Image
                                        src={((imagecount === 0) && appetiteimg) || ((imagecount === 1) && appetiteimg2) || ((imagecount === 2) && appetiteimg3)}
                                        key={imagecount}
                                        className={styles.image}
                                    />

                                    <div className={styles.middle} >
                                        <p className={styles.text}>APPetite is a web app able to search, filter, order and create recipes from various parameters.</p>
                                        <HStack className={styles.columns}>
                                            <ChakraLink href='https://pi-foods-seven.vercel.app/' isExternal fontWeight={600} width={'100%'} color='white'>
                                                Visit 
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                            <ChakraLink href='https://github.com/gjuancruz/PI-Foods' isExternal fontWeight={600} width={'100%'} color='white' borderLeft={'1px groove white'}>
                                                Repository 
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                        </HStack>
                                    </div>
                                </div>
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
                                <div className={styles.container}>

                                    <Image
                                        src={weatherappimg}
                                        alignSelf="center"
                                        // height={isNotSmallerScreen ? "270" :'130'}
                                        className={styles.image}
                                    />
                                    <div className={styles.middle}>
                                        <p className={styles.text}>Weather App consumes data from the Open Weather App API and renders cards with the weather of the desired cities</p>
                                        <HStack className={styles.columns}>
                                            <ChakraLink href='https://pi-foods-seven.vercel.app/' isExternal fontWeight={600} width={'100%'} color='white'>
                                                Visit 
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                            <ChakraLink href='https://weather-app-gjuancruz.vercel.app/' isExternal fontWeight={600} width={'100%'} color='white' borderLeft={'1px groove white'}>
                                                Repository 
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                        </HStack>
                                    </div>
                                </div>
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