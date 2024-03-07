import Lottie from 'react-lottie'
import animationData1 from '../../assets/sad.json'
import animationData2 from '../../assets/neu.json'
import animationData3 from '../../assets/hap.json'
import animationData4 from '../../assets/que.json'
import animationData5 from '../../assets/red.json'
import animationData6 from '../../assets/yel.json'
import animationData7 from '../../assets/gre.json'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const dopOptions = {
    dop1: {
        loop: false,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop2: {
        loop: false,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop3: {
        loop: false,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop4: {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop5: {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop6: {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop7: {
        loop: true,
        autoplay: true,
        animationData: animationData4,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop8: {
        loop: false,
        autoplay: true,
        animationData: animationData5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop9: {
        loop: false,
        autoplay: true,
        animationData: animationData6,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop10: {
        loop: false,
        autoplay: true,
        animationData: animationData7,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop11: {
        loop: true,
        autoplay: true,
        animationData: animationData5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop12: {
        loop: true,
        autoplay: true,
        animationData: animationData6,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    },
    dop13: {
        loop: true,
        autoplay: true,
        animationData: animationData7,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
}

const Rate = ({ auth }) => {
    const [lessonNum, setLessonNum] = useState(1)
    const [levelC, setLevelC] = useState(0)
    const [levelE, setLevelE] = useState(0)
    const [dop, setDop] = useState('dop7')
    const [dop2, setDop2] = useState('dop7')
    const [subject, setSubject] = useState('')
    const [complete, setComplete] = useState(false)
    const [lessonData, setLessonData] = useState({})
    const [init, setInit] = useState(false)
    const [time, setTime] = useState('09:00 - 10:00')

    const options = {
        headers: {
            'Authorization': auth
        }
    }

    const controls = useAnimation();

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await fetch('http://localhost:3000/schooldays/1/lessons', options)
                const data = await response.json()
                setLessonData(data)
                setInit(true)
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        }
        getAll()
    }, [])

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await fetch('http://localhost:3000/schooldays/1/lessons', options)
                const data = await response.json()
                setLessonData(data)
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        }
        getAll()
    }, [levelC, levelE])

    useEffect(() => {
        if (lessonData && lessonData.lessons && lessonData.lessons.length > 0) {
            setSubject(lessonData.lessons[0].subjectName);
            setLevelC(lessonData.lessons[0].confidence)
            setLevelE(lessonData.lessons[0].enjoyment)
        }
    }, [init])

    useEffect(() => {
        if (lessonData && lessonData.lessons && lessonData.lessons.length > 0) {
            if (lessonNum === 1) {
                setSubject(lessonData.lessons[0].subjectName);
                setLevelC(lessonData.lessons[0].confidence)
                setLevelE(lessonData.lessons[0].enjoyment)
                setTime('09:00 - 10:00')
            }
            if (lessonNum === 2) {
                setSubject(lessonData.lessons[1].subjectName)
                setLevelE(lessonData.lessons[1].enjoyment)
                setLevelC(lessonData.lessons[1].confidence)
                setTime('10:00 - 11:00')
            }
            if (lessonNum === 3) {
                setSubject(lessonData.lessons[2].subjectName)
                setLevelE(lessonData.lessons[2].enjoyment)
                setLevelC(lessonData.lessons[2].confidence)
                setTime('11:00 - 12:00')
            }
            if (lessonNum === 4) {
                setSubject(lessonData.lessons[3].subjectName)
                setLevelE(lessonData.lessons[3].enjoyment)
                setLevelC(lessonData.lessons[3].confidence)
                setTime('12:00 - 13:00')
            }
            if (lessonNum === 5) {
                setSubject(lessonData.lessons[4].subjectName)
                setLevelE(lessonData.lessons[4].enjoyment)
                setLevelC(lessonData.lessons[4].confidence)
                setTime('14:00 - 15:00')
            }
        }
    }, [lessonNum])

    const lowe = async () => {
        try {
            const enjoymentPatchUrl = `http://localhost:3000/lessons/${lessonNum}/enjoyment`
            const enjoymentResponse = await fetch(enjoymentPatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ enjoyment: 1 })
            })
            if (!enjoymentResponse.ok) {
                throw new Error(`HTTP error! Status: ${enjoymentResponse.status}`)
            }
            console.log('PATCH request for enjoyment successful')
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelE(1) }

    }

    const mide = async () => {
        try {
            const enjoymentPatchUrl = `http://localhost:3000/lessons/${lessonNum}/enjoyment`
            const enjoymentResponse = await fetch(enjoymentPatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ enjoyment: 2 })
            })
            if (!enjoymentResponse.ok) {
                throw new Error(`HTTP error! Status: ${enjoymentResponse.status}`)
            }
            console.log(`PATCH request for enjoyment successful on ${lessonNum}`)
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelE(2) }
    }

    const highe = async () => {
        try {
            const enjoymentPatchUrl = `http://localhost:3000/lessons/${lessonNum}/enjoyment`
            const enjoymentResponse = await fetch(enjoymentPatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ enjoyment: 3 })
            })
            if (!enjoymentResponse.ok) {
                throw new Error(`HTTP error! Status: ${enjoymentResponse.status}`)
            }
            console.log('PATCH request for enjoyment successful')
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelE(3) }
    }

    const lowc = async () => {
        try {
            const confidencePatchUrl = `http://localhost:3000/lessons/${lessonNum}/confidence`
            const confidenceResponse = await fetch(confidencePatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ confidence: 1 })
            })
            if (!confidenceResponse.ok) {
                throw new Error(`HTTP error! Status: ${confidenceResponse.status}`)
            }
            console.log('PATCH request for confidence successful')
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelC(1) }
    }

    const midc = async () => {
        try {
            const confidencePatchUrl = `http://localhost:3000/lessons/${lessonNum}/confidence`
            const confidenceResponse = await fetch(confidencePatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ confidence: 2 })
            })
            if (!confidenceResponse.ok) {
                throw new Error(`HTTP error! Status: ${confidenceResponse.status}`)
            }
            console.log('PATCH request for confidence successful')
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelC(2) }
    }

    const highc = async () => {
        try {
            const confidencePatchUrl = `http://localhost:3000/lessons/${lessonNum}/confidence`
            const confidenceResponse = await fetch(confidencePatchUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify({ confidence: 3 })
            })
            if (!confidenceResponse.ok) {
                throw new Error(`HTTP error! Status: ${confidenceResponse.status}`)
            }
            console.log('PATCH request for confidence successful')
        } catch (error) {
            console.error('Error in low method:', error)
        } finally { setLevelC(3) }
    }

    useEffect(() => {
        switch (levelE) {
            case 0:
                setDop('dop7')
                break
            case 1:
                setDop('dop4')
                break
            case 2:
                setDop('dop5')
                break
            case 3:
                setDop('dop6')
                break
            default:
                setDop('dop7')
        }
    }, [levelE, lessonNum])

    useEffect(() => {
        switch (levelC) {
            case 0:
                setDop2('dop7')
                break
            case 1:
                setDop2('dop11')
                break
            case 2:
                setDop2('dop12')
                break
            case 3:
                setDop2('dop13')
                break
            default:
                setDop2('dop7')
        }
    }, [levelC, lessonNum])

    const handleLessonChange = (num) => {
        setLessonNum(num)
    }

    useEffect(() => {
        if (levelC != 0 && levelE != 0) {
            setComplete(true)
        } else {
            setComplete(false)
        }
    }, [lessonData])


    const variants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    };

    const variants2 = {
        hidden: { x: '100%' },
        visible: { x: 0 },
    };

    const variants3 = {
        hidden: { y: '-100%' },
        visible: { y: 0 },
    };

    const variants4 = {
        hidden: { y: '200%' },
        visible: { y: 0 },
    };

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [controls]);

    return (
        <div className='rate-container'>
            <div className='changer'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants3}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='switch'>
                    <button onClick={() => handleLessonChange(1)} className='selector'>Lesson 1</button>
                    <button onClick={() => handleLessonChange(2)} className='selector'>Lesson 2</button>
                    <button onClick={() => handleLessonChange(3)} className='selector'>Lesson 3</button>
                    <button onClick={() => handleLessonChange(4)} className='selector'>Lesson 4</button>
                    <button onClick={() => handleLessonChange(5)} className='selector'>Lesson 5</button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={controls}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    style={{ width: '100%', height: '100%' }}
                    className='lesson-cont'>
                    <h1 className='less-num'>Lesson {lessonNum}</h1>
                    <h1 className='sub'>{subject}</h1>
                    <h1 className='time'>{time}</h1>
                    <div className='smileyc'>
                        <h1>Confidence</h1>
                        <Lottie options={dopOptions[dop2]} />
                    </div>
                    <div className='smileye'>
                        <h1>Enjoyment</h1>
                        <Lottie options={dopOptions[dop]} />
                    </div>
                    <div className='message'>
                        {complete ? <h1>Thank you for your feedback!</h1> : null}
                    </div>
                    <div className='tag'>
                        {complete ? < motion.img
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={variants4}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='stamp' src='https://www.onlygfx.com/wp-content/uploads/2018/04/completed-stamp-2.png' /> : null}
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='conf'>
                    <h1 className='vote-title'>confidence</h1>
                    <div onClick={lowc} className='smiley-1'>
                        <Lottie options={dopOptions.dop8} />
                    </div>
                    <div onClick={midc} className='smiley-2'>
                        <Lottie options={dopOptions.dop9} />
                    </div>
                    <div onClick={highc} className='smiley-3'>
                        <Lottie options={dopOptions.dop10} />
                    </div>
                </motion.div>
                <div></div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants2}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='enj'
                >
                    <h1 className='vote-title'>Enjoyment</h1>
                    <div onClick={lowe} className='smiley-1'>
                        <Lottie options={dopOptions.dop1} />
                    </div>
                    <div onClick={mide} className='smiley-2'>
                        <Lottie options={dopOptions.dop2} />
                    </div>
                    <div onClick={highe} className='smiley-3'>
                        <Lottie options={dopOptions.dop3} />
                    </div>
                </motion.div>

            </div>
        </div >
    )
}

export default Rate