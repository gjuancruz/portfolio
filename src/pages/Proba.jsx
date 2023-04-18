import React, { useRef, useState } from "react";
import Landing from "./Landing";
import Blue from "./Blue";
import Red from "./Red";
import NavBar from "./NavBar";
import { Box, Flex, Image, Stack, Text, useMediaQuery, Circle, Button, HStack, UnorderedList, ListItem, List, VStack, useDisclosure, Icon } from "@chakra-ui/react"
import styles from './Landing.module.css'

const Proba = () => {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
    const [element, setElement] = useState(true)
    const handleProx = (event) => {
        const section1 = document.getElementById('section-1')
        const section2 = document.getElementById('section-2')
        if (event.target.value === 'section-1') {
            section1.scrollIntoView({ behavior: 'smooth' });
        } 
        if (event.target.value === 'section-2') {
            section2.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <>
                {isNotSmallerScreen ?
                    <nav style={{ backgroundColor: "transparent", display: "flex", gap: 4 }}>
                        <div
                            className={styles.navb}
                        >
                            <button onClick={(event) => handleProx(event)}>About</button>

                        </div>
                        <div
                            className={styles.navb}
                        >
                            <button value={'section-1'} onClick={(event) => handleProx(event)}>My projects</button>

                        </div>
                        <div
                            className={styles.navb}
                        >
                            <button value={'section-2'} onClick={(event) => handleProx(event)}>Contact</button>
                        </div>
                    </nav>
                    :
                    null
                }
            </>
            <Landing></Landing>
            <div id="section-1">
                <Blue ></Blue>
            </div>
            <div id="section-2">
                <Red></Red>
            </div>
        </>
    )
}

export default Proba