import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../../assets/out.json'

const Nav = () => {
    const [logged, setLogged] = useState(false)

    const dop = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    useEffect(() => {
        setLogged(true)
    }, [])

    if (logged) {
        return (
            <>
                <nav>
                    <div className='n-top'>
                        <div className='logo'>Logo</div>
                    </div>
                    <div className='out'><Lottie options={dop} /></div>
                    <div className='r'>
                        <NavLink>Rate</NavLink>
                    </div>
                    <div className='d'>
                        <NavLink>Discover</NavLink>

                    </div>

                </nav><Outlet />
            </>
        )
    }

    else {
        return (
            <>
                <nav>
                    <div className='n-top'>
                        <div className='logo'></div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Nav