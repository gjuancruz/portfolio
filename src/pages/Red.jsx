import React from 'react';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import styles from './Red.module.css'
const Blue = () => {
        return (
            <motion.div className={styles.container}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth,transition:{duration:0.1}}}
            >
                <div className="container">
                    <div className="content">
                        <h1>Red</h1>
                        <p>un par de gilada q dice la vagancia aca re piolita</p>
                    </div>
                    <div>
                        <Link to='/blue'>
                        <button>blue</button>
                        </Link>
                        <Link to='/'>
                        <button>landing</button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        )
    }
export default Blue;