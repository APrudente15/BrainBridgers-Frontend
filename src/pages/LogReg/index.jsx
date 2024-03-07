import { useEffect } from 'react'
import LoginRegister from '../../components/LoginRegister'
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LogReg = ({ logged, setLogged }) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (logged) {
            navigate('/discover')
        }
    }, [])


    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [controls]);

    return (
        <div >
            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%' }}
            >
                <div className='lr'>
                    <LoginRegister logged={logged} setLogged={setLogged} />
                </div>
            </motion.div>
        </div>
    )
}

export default LogReg