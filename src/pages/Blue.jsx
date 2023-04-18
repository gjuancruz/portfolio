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
import mooncinemaimg from '../assets/moon-cinema-0.jpg'
import mooncinemaimg2 from '../assets/1659567067703.jpg'
import mooncinemaimg3 from '../assets/1659567511395.jpg'
import mooncinemaimg4 from '../assets/1659567584474.jpg'
import weatherappimg from '../assets/weatherappimg.png'
import weatherappimg2 from '../assets/weatherappimg2.png'



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Blue = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const [flag, setFlag] = useBoolean()
    const [imagecount, setImagecount] = useState(0)
    const [imagecount2, setImagecount2] = useState(0)
    const [moonCinemaImg, setmoonCinemaImg] = useState(`mooncinemaimg`)

    return (
        // <motion.div
        //     key={1}
        //     initial={{ y: -1000, opacity: 0 }}
        //     animate={{ y: 10, opacity: 1 }}
        //     transition={{ type: "spring", stiffness: 75 }}
        // >
        <Stack style={isNotSmallerScreen ? { height: '100vh' } : { height: '100%' }}>
            {/* <Flex alignSelf='center'>
                    <Link to='/'>
                        <Button colorScheme='twitter' variant='solid' >My bio  <Icon as={ArrowUpIcon} /></Button>
                    </Link>
                </Flex> */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                pl={isNotSmallerScreen ? "8" : "0"}
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
                        <div className={isNotSmallerScreen ? styles.container : styles.containermobile}>
                            <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
                                <div>
                                    <img className={styles.image} src={mooncinemaimg} />
                                </div>
                                <div>
                                    <img className={styles.image} src={mooncinemaimg2} />
                                </div>
                                <div>
                                    <img className={styles.image} src={mooncinemaimg3} />
                                </div>
                                <div>
                                    <img className={styles.image} src={mooncinemaimg4} />
                                </div>
                            </Carousel>
                            {
                                isNotSmallerScreen ?
                                    <div className={styles.middle} >
                                        <p className={styles.text}>Moon Cinema is a cinema management web application able to provide services both to consumers (information searching, tickets and candys buying, profile management, etc) and administrators (users, movies, functions and sells moderation and administration). Developed with 7 Henry bootcamp colleagues.</p>
                                        <HStack className={styles.columns}>
                                            <ChakraLink href='https://moon-cinema-app.vercel.app/home' isExternal fontWeight={600} width={'100%'} color='white'>
                                                Visit
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                            <ChakraLink href='https://github.com/gjuancruz/PF' isExternal fontWeight={600} width={'100%'} color='white' borderLeft={'1px groove white'}>
                                                Repository
                                                <Icon as={ExternalLinkIcon} />
                                            </ChakraLink>
                                        </HStack>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center">
                            <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                            <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> APPetite</Text>
                        </Flex>
                        <div className={isNotSmallerScreen ? styles.container : styles.containermobile}>
                            <Carousel
                                showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
                                <div>
                                    <img className={styles.image} src={appetiteimg} />
                                </div>
                                <div>
                                    <img className={styles.image} src={appetiteimg2} />
                                </div>
                                <div>
                                    <img className={styles.image} src={appetiteimg3} />
                                </div>
                            </Carousel>
                            {
                                isNotSmallerScreen ?
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
                                    :
                                    null
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <Flex justifyContent="center">
                            <Text fontSize='4xl' fontWeigth='semibold'>This is</Text>
                            <Text fontSize='4xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" mb='3vh'> Weather App</Text>
                        </Flex>
                            <div className={isNotSmallerScreen ? styles.container : styles.containermobile}>
                                <Carousel showThumbs={false} showStatus={false} showArrows={false} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
                                    <div>
                                        <img className={styles.image} src={weatherappimg} />
                                    </div>
                                    <div>
                                        <img className={styles.image} src={weatherappimg2} />
                                    </div>
                                </Carousel>
                                {
                                    isNotSmallerScreen ?
                                        <div className={styles.middle}>
                                            <p className={styles.text}>Weather App consumes data from the Open Weather App API and renders cards with the weather of the desired cities</p>
                                            <HStack className={styles.columns}>
                                                <ChakraLink href='https://weather-app-gjuancruz.vercel.app/' isExternal fontWeight={600} width={'100%'} color='white'>
                                                    Visit
                                                    <Icon as={ExternalLinkIcon} />
                                                </ChakraLink>
                                                <ChakraLink href='https://github.com/gjuancruz/weather-app' isExternal fontWeight={600} width={'100%'} color='white' borderLeft={'1px groove white'}>
                                                    Repository
                                                    <Icon as={ExternalLinkIcon} />
                                                </ChakraLink>
                                            </HStack>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {/* <Flex alignSelf='center'>
                    <Link to='/red'>
                        <Button colorScheme='twitter' variant='solid' m='2'>Contact  <Icon as={ArrowDownIcon} /></Button>
                    </Link>
                </Flex> */}
        </Stack>
    )
}
export default Blue;