import React from "react";
import { Box, Flex, Image, Stack, Text, useMediaQuery, Circle, Button, HStack, UnorderedList, ListItem, List, VStack, useDisclosure, Icon } from "@chakra-ui/react"
import styles from './Landing.module.css'

const NavBar = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const handleProx = (event) =>{
        console.log(event)
        event.preventDefault()
        window.scrollTo({ top: 1350, behavior: 'smooth' })
        }
    return (

        <>
            {isNotSmallerScreen ?
                <nav style={{ backgroundColor: "transparent", display: "flex", gap: 4 }}>
                    <div
                        className={styles.navb}
                    >
                        <a onClick={(event) => handleProx(event)}>About</a>

                    </div>
                    <div
                        className={styles.navb}
                    >
                        <a onClick={(event) => handleProx(event)}>My projects</a>

                    </div>
                    <div
                        className={styles.navb}
                    >
                        <a onClick={(event) => handleProx(event)}>Contact</a>
                    </div>
                </nav>
                :
                null
            }
        </>
    )
}

export default NavBar