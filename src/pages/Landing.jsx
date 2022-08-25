import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react"


const Landing = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    return (
        // <AnimatePresence>
            <motion.div
            key={2}
            initial={{y:-1000, opacity: 0}}
            animate={{ y: 10, opacity: 1}}
            transition={{ type: "spring", stiffness: 75 }}
                // key={2}
                // initial={{opacity: 0}}
                // animate={{opacity: 1 }}
                // exit={{opacity: 0}}
            >

                <Stack>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"}
                        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                        alignSelf="flex-start">
                        <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
                            <Text fontSize='5xl' fontWeigth='semibold'>Hi, I'm</Text>
                            <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Juan Cruz Galaz</Text>
                            <Text fontSize='2xl' color='gray.500'>Full Stack Web Developer</Text>
                            <Link to='/blue'>
                                <button>blue</button>
                            </Link>
                            <Link to='/red'>
                                <button>red</button>
                            </Link>
                        </Box>
                    </Flex>
                </Stack>
            </motion.div>
        // </AnimatePresence>
    )
}
export default Landing;