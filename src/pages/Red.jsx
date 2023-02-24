import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from "react-router-dom";

import styles from './Landing.module.css'
import {
    Box, Flex, Image, Stack, Text, useMediaQuery, Circle, Button, HStack, List, ListItem, ListIcon, Link as ChakraLink, Icon, useDisclosure
} from "@chakra-ui/react"
import { PhoneIcon, AtSignIcon, AttachmentIcon, DownloadIcon, ArrowUpIcon } from '@chakra-ui/icons'
import image from '../assets/footer-artwork.png'
import pdfen from '../assets/JUAN CRUZ GALAZ - CV - DEVELOPER.pdf'
import pdfes from '../assets/JUAN CRUZ GALAZ - CV - DEVELOPER (spanish).pdf'

const Red = () => {
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

            <Stack >
                <Flex alignSelf="center">
                    <Link to="/blue">
                        <Button colorScheme='twitter' variant='solid'>My projects  <Icon as={ArrowUpIcon} /></Button>
                    </Link>
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px"
                    alignSelf="center">
                    <Box mt={isNotSmallerScreen ? "0" : "16"} align="center">
                        <Text fontSize='5xl' fontWeigth='semibold'>Let's get</Text>


                        <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">in touch!</Text>


                        <Text color='gray.500'>I'd be glad to hear from you. Don't hesitate!</Text>

                    </Box>

                    <Box mt={isNotSmallerScreen ? "0" : "16"} align="center" pl={isNotSmallerScreen ? "16" : '0'}>
                        {/* <Image
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
                        <Circle bg="blue.100" opacity="0.7"
                            w="200px" h="200px" alignItems="flex-end" m={'2'}
                        /> */}

                        <List spacing={3} p={isNotSmallerScreen ? "16" : "0"}>
                            <ListItem>
                                <ListIcon as={PhoneIcon} color='#1DA1F2' />
                                +54 3875039513
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AtSignIcon} color='#1DA1F2' />
                                juancrgalaz@gmail.com
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AttachmentIcon} color='#1DA1F2' />
                                <ChakraLink href='https://github.com/gjuancruz' isExternal>https://github.com/gjuancruz</ChakraLink>
                            </ListItem>
                            {/* You can also use custom icons from react-icons */}
                            <ListItem>
                                <ListIcon as={AttachmentIcon} color='#1DA1F2' />
                                <ChakraLink href='https://www.linkedin.com/in/juan-cruz-galaz-fullstack/' isExternal>https://www.linkedin.com/in/juan-cruz-galaz-fullstack/</ChakraLink>
                            </ListItem>
                        </List>

                    </Box>


                </Flex>
                <Box display='block'>
                    <Text align='center' fontSize='3xl' fontWeigth='semibold' mb='3vh'>Download my CV!</Text>
                    <Button float='left' ml={isNotSmallerScreen ? '41vw' : '15vw'}><a href={pdfen} download="JUAN CRUZ GALAZ - CV - DEVELOPER.pdf">English <Icon as={DownloadIcon} /></a></Button>
                    <Button float='right' mr={isNotSmallerScreen ? '41vw' : '15vw'}><a href={pdfes} download="JUAN CRUZ GALAZ - CV - DEVELOPER.pdf">Spanish <Icon as={DownloadIcon} /></a></Button>

                </Box>
                <Image src={image}></Image>
            </Stack>
        </motion.div>
        // </AnimatePresence>
    )
}
export default Red;