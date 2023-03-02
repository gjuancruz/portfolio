import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import { Box, Flex, Image, Stack, Text, useMediaQuery, Circle, Button, HStack, UnorderedList, ListItem, List, VStack, useDisclosure, Icon } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon, ArrowUpIcon, ArrowDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import image from '../assets/profile.jpg'
import csslogo from '../assets/nuevo1.png'
import jslogo from '../assets/nuevo5.png'
import nodelogo from '../assets/nuevo2.png'
import reactlogo from '../assets/nuevo4.png'
import htmllogo from '../assets/nuevo6.png'
import postgrelogo from '../assets/nuevo3.png'
import expresslogo from '../assets/express.png'
import sequelizelogo from '../assets/sequelize.png'
import reduxlogo from '../assets/redux3.png'



import Marquee from "react-fast-marquee";

const Landing = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"} pt={isNotSmallerScreen ? "64px" : "0"} mb={isNotSmallerScreen ? '-12vh' : "0"} ml={isNotSmallerScreen ? '10vw' : "0"}
                    align="center">
                    <Box mt={isNotSmallerScreen ? "0" : "16"} align={isNotSmallerScreen ? "flex-start" : 'center'}>
                        <Text fontSize='5xl' fontWeigth='semibold'>Hey there! I'm </Text>
                        <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Juan Cruz Galaz</Text>
                        <Text color='gray.500'>Full Stack Web Developer</Text>
                        <Button mt='5px' onClick={onOpen}>More about me <Icon as={InfoOutlineIcon} /></Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>This is me!</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    Hey there! 👋<br />

                                    👤 My name is Juan Cruz Galaz, Full Stack Web Developer recently graduated from Henry's bootcamp.<br />

                                    👨‍💻 Passionate about technology since I was a little kid, I'm looking to achieve the pleasure of dedicating 100% on it.
                                    I'm someone who is motivated by new challenges, to keep on learning and improving day by day. I consider my leadership, communication and positive attitude remarkable skills.<br />

                                    💪 My experience on IT area is based on the projects I made on Henry's bootcamp, with +700 hours of theoretical and practical study through which I could develop skills both technical (referred to software development) and soft (security, autonomy, productivity, teamworking).<br />

                                    🛠 Technologies and tools I dominate:<br />
                                    | JavaScript | React | Redux | TypeScript | HTML | CSS | Bootstrap | Node | Express | Prisma | PostgreSQL | Sequelize | Chakra UI | Framer Motion | Chatbots | Postman | Git | SCRUM Methodology |
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
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
                {isNotSmallerScreen ?

                    <Marquee style={{height:'125px'}} gradient={false} speed={70}>
                        <Image src={jslogo} style={{marginLeft:'100px'}} />
                        <Image src={htmllogo} style={{marginLeft:'100px', height:'135px'}} />
                        <Image src={csslogo} style={{marginLeft:'100px', height:'115px'}}></Image>
                        <Image src={reactlogo} style={{marginLeft:'100px'}}></Image>
                        <Image src={reduxlogo} style={{marginLeft:'100px'}}></Image>
                        <Image src={nodelogo} style={{marginLeft:'100px'}} ></Image>
                        <Image src={expresslogo} style={{marginLeft:'100px'}}></Image>
                        <Image src={postgrelogo} style={{marginLeft:'100px'}}></Image>
                        <Image src={sequelizelogo} style={{marginLeft:'100px', height:'110px'}}></Image>    
                    </Marquee>
                    :
                    <Box>
                        <Flex justifyContent='center'>
                            <Image src={jslogo} width='125px' className={styles.prueba} />
                            <Image src={csslogo} width='100px' className={styles.prueba} />
                            <Image src={htmllogo} width='125px' className={styles.prueba}></Image>
                        </Flex>
                        <Flex justifyContent='center'>
                            <Image src={reactlogo} width='125px' className={styles.prueba}></Image>
                            <Image src={nodelogo} width='125px' className={styles.prueba}></Image>
                            <Image src={postgrelogo} width='125px' className={styles.prueba}></Image>
                        </Flex>

                    </Box>
                }
                <Flex alignSelf="center" p='10'>
                    <Link to="/blue">
                        <Button colorScheme='twitter' variant='solid'>My projects  <Icon as={ArrowDownIcon} /></Button>
                    </Link>
                </Flex>
            </Stack>
            <Flex direction='row'>

            </Flex>

        </motion.div>

    )
}
export default Landing;