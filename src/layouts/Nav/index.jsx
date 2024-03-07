import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../../assets/out.json'
import { motion, useAnimation } from 'framer-motion'

const Nav = ({ logged, setLogged }) => {
    const [seeInf, setSeeInf] = useState(false)

    const navigate = useNavigate()

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

    const logOut = () => {
        localStorage.removeItem('token')
        setLogged(false)
        navigate('/')
    }

    const dispInfo = () => {
        setSeeInf(!seeInf)
    }

    const hide = () => {
        setSeeInf(false)
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
                    <div>
                    </div>
                    <div onClick={logOut} className='out'><Lottie options={dop} /></div>
                    <div className='r'>
                        <NavLink to='/rate'><div className='nl'>Rate</div></NavLink>
                    </div>
                    <div className='d'>
                        <NavLink to='/discover'><div className='nl'>Discover</div></NavLink>
                    </div>
                </motion.nav>
                <div className='logo2'><img className='img' src='https://github-production-user-asset-6210df.s3.amazonaws.com/110691505/310489420-cb6409c2-fb5f-4caf-927b-394d357a8081.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T121134Z&X-Amz-Expires=300&X-Amz-Signature=0218988590c7e76d7f3134ef387d8096aecd095e54e578a02adeecdb3b6fce73&X-Amz-SignedHeaders=host&actor_id=152859842&key_id=0&repo_id=768040580' alt='logo' /></div>
                <Outlet />
                <div>
                    <img onClick={dispInfo} className='info' src='https://cdn-icons-png.flaticon.com/512/8/8201.png' />
                    {seeInf ? <img className='inst' src='./src/assets/ins.png' /> : null}
                    {seeInf ? <img onClick={hide} className='cross' src='https://cdn-icons-png.flaticon.com/512/51/51517.png' /> : null}
                </div>
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
                        <div className='logo'><img className='img' src='https://github-production-user-asset-6210df.s3.amazonaws.com/110691505/310489420-cb6409c2-fb5f-4caf-927b-394d357a8081.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T121134Z&X-Amz-Expires=300&X-Amz-Signature=0218988590c7e76d7f3134ef387d8096aecd095e54e578a02adeecdb3b6fce73&X-Amz-SignedHeaders=host&actor_id=152859842&key_id=0&repo_id=768040580' alt='logo' /></div>
                    </div>
                    <div className='out'></div>
                </motion.nav >
                <Outlet />
            </>
        )
    }
}

export default Nav