import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../../assets/out.json'
import { motion, useAnimation } from 'framer-motion';

const Nav = () => {
    const [logged, setLogged] = useState(false)

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ x: 0 });
    }, [controls]);

    const dop = {

        loop: 2,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        },
    }

    const variants = {
        hidden: { y: '-100%' },
        visible: { y: 0 },
    };

    const new1 = () => {
        setLogged(!logged)
    }



    if (logged) {
        return (
            <>
                <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <div className='n-top'>
                        <div className='logo'></div>
                    </div>
                    <div className='out'><Lottie options={dop} /></div>
                    <div className='r'>
                        <NavLink><div className='nl'>Rate</div></NavLink>
                    </div>
                    <div className='d'>
                        <NavLink><div className='nl'>Discover</div></NavLink>

                    </div>
                </motion.nav>
                <button onClick={new1}></button>
                <Outlet />
            </>
        )
    }

    else {
        return (
            <>
                <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <div className='n-top'>
                        <div className='logo'><img className='img' src='./src/assets/logo.png' /></div>
                    </div>
                    <div className='out'></div>
                </motion.nav >
                <button onClick={new1}></button>
                <Outlet />
            </>
        )
    }
}

export default Nav