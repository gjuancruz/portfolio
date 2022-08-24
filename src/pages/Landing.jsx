import React from 'react';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react"


const Landing = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    return (
        <motion.div className={styles.container}
            intial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            {/* <div className="container">
                    <div className="content">
                        <h1>landing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nulla condimentum, ultrices ipsum et, feugiat arcu. Morbi fringilla orci et odio ullamcorper feugiat. Quisque ullamcorper sapien nec enim iaculis mattis. Maecenas eu suscipit lorem, in facilisis nunc. Duis ultricies ex varius, ultricies diam fermentum, tincidunt ipsum. Sed scelerisque tincidunt tellus sed viverra. Morbi fringilla at magna vulputate gravida. Pellentesque rutrum vitae ligula non pellentesque. Nullam molestie, eros sit amet placerat suscipit, lacus ante aliquet nunc, quis auctor quam mi eget nibh. Morbi non sapien egestas tellus pellentesque rutrum vel vitae turpis. Mauris porttitor sem quis tellus feugiat, bibendum malesuada tellus lacinia. Etiam eu placerat ex. Aliquam cursus euismod dolor sit amet commodo.

Donec scelerisque arcu aliquam tellus efficitur elementum. Mauris magna libero, tempor fringilla dictum sed, porttitor a purus. Praesent vitae nibh sed eros condimentum porta. Nulla quis hendrerit ex. Phasellus aliquet nisl ante. Cras id risus arcu. Sed egestas, diam vitae tristique malesuada, nisi orci tincidunt felis, convallis hendrerit est ipsum eget justo. Mauris vitae tellus nec mauris venenatis volutpat sit amet non justo.

Etiam dictum lobortis erat, quis ullamcorper tortor efficitur vitae. Integer ultricies, nunc vitae dignissim rhoncus, ipsum ipsum malesuada velit, ut feugiat lacus mauris at est. Vivamus egestas orci sit amet velit malesuada, vitae facilisis nulla iaculis. Sed consequat arcu metus, in efficitur turpis viverra ut. Sed consectetur dictum ultricies. Nullam mollis vel diam id mollis. Nullam lobortis suscipit vehicula. Nam tempus odio sit amet nunc suscipit, et commodo est mollis. Proin ornare consequat odio, nec pulvinar arcu ullamcorper in.

Pellentesque ultrices lectus nec urna iaculis varius. Phasellus euismod venenatis nunc, sed ultrices urna vehicula id. Nulla tincidunt lorem at velit viverra, eu lobortis nisl dapibus. Integer a condimentum magna, in fringilla nibh. Praesent sagittis tempus diam, vitae malesuada magna ullamcorper vehicula. Praesent varius sagittis pulvinar. Phasellus nisl erat, consequat at velit a, lobortis mattis purus. Suspendisse suscipit pellentesque tincidunt. Quisque fermentum lacinia mollis.

Duis rutrum ex ligula. Vestibulum nec hendrerit sem. Sed eget nulla non mi viverra fermentum sit amet eu eros. Phasellus varius nunc nec nibh suscipit, non venenatis velit sodales. Aliquam ut mi iaculis, egestas elit a, feugiat est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at nibh quam. Fusce mattis, arcu sed sagittis pulvinar, justo felis fringilla augue, a euismod diam quam sed lacus. Aliquam ultrices velit id lectus pellentesque pretium. Phasellus in consectetur sapien. Donec eget ante eleifend, consectetur velit in, varius arcu. Sed feugiat at quam sed pulvinar. Proin eu pretium erat, eu malesuada mauris. In ex dolor, efficitur ut volutpat nec, convallis non neque. Cras vitae ante id elit venenatis eleifend auctor in nunc. Integer sed massa ac lacus auctor placerat</p>
                    </div>
                    
                    <div>
                        <Link to='/blue'>
                        <button>blue</button>
                        </Link>
                        <Link to='/red'>
                        <button>red</button>
                        </Link>
                    </div>
                </div> */}

            <Stack>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                    alignSelf="flex-start">
                        <Box mt={isNotSmallerScreen? "0" : "16"} align="flex-start">
                            <Text fontSize='5xl' fontWeigth='semibold'>Hi, I'm</Text>
                            <Text fontSize='7xl' fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Juan Cruz Galaz</Text>
                            <Text fontSize='2xl'  color='gray.500'>Full Stack Web Developer</Text>
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
    )
}
export default Landing;