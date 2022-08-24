import React from 'react';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import styles from './Blue.module.css'

const Blue = () => {
        return (
            <motion.div 
            className={styles.container}
            intial={{width:0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth,transition:{duration:0.1}}}
            >
                <div>
                <div className="container">
                    <div className="content">
                        <h1>Blue</h1>
                        <p>Hoodie taxidermy drinking vinegar, palo santo actually schlitz you probably haven't heard of them tofu kombucha keytar meggings. Adaptogen lomo brunch, activated charcoal austin ugh vape whatever schlitz semiotics tumblr.</p>
                    </div>
                    <div>
                        <Link to='/'>
                        <button className='btn btn-danger'>landing</button>
                        </Link>
                        <Link to='/red'>
                        <button>red</button>
                        </Link>
                    </div>
                </div>
</div>
            </motion.div>
            
        )
    }
export default Blue;