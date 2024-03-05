import Lottie from 'react-lottie'
import animationData1 from '../../assets/sad.json'
import animationData2 from '../../assets/neu.json'
import animationData3 from '../../assets/hap.json'
import animationData4 from '../../assets/que.json'
import animationData5 from '../../assets/don.json'
import { useEffect, useState } from 'react'

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
    }
}

const Rate = () => {
    const mock = {
        lesson1: {
            ID: 1,
            Subject: 'Astronomy',
            Confidence: 0
        },
        lesson2: {
            ID: 2,
            Subject: 'Botany',
            Confidence: 1
        },
        lesson3: {
            ID: 3,
            Subject: 'Geology',
            Confidence: 0
        },
        lesson4: {
            ID: 4,
            Subject: 'History',
            Confidence: 3
        },
        lesson5: {
            ID: 5,
            Subject: 'Mathematics',
            Confidence: 2
        },
    }

    const [lessonNum, setLessonNum] = useState(1)
    const [level, setLevel] = useState(0)
    const [dop, setDop] = useState('dop7')
    const [subject, setSubject] = useState('')
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        setSubject(mock.lesson1.Subject)
        setLevel(mock.lesson1.Confidence)
        setLevel((prevLevel) => {
            if (prevLevel !== 0) {
                setComplete(true)
            } else {
                setComplete(false)
            }
        })
    }, [])

    useEffect(() => {
        if (lessonNum === 1) {
            setSubject(mock.lesson1.Subject)
            setLevel(mock.lesson1.Confidence)
        }
        if (lessonNum === 2) {
            setSubject(mock.lesson2.Subject)
            setLevel(mock.lesson2.Confidence)
        }
        if (lessonNum === 3) {
            setSubject(mock.lesson3.Subject)
            setLevel(mock.lesson3.Confidence)
        }
        if (lessonNum === 4) {
            setSubject(mock.lesson4.Subject)
            setLevel(mock.lesson4.Confidence)
        }
        if (lessonNum === 5) {
            setSubject(mock.lesson5.Subject)
            setLevel(mock.lesson5.Confidence)
        }
        setComplete(false)
        setLevel((prevLevel) => {
            if (prevLevel !== 0) {
                setComplete(true)
            } else {
                setComplete(false)
            }
        })
    }, [lessonNum])

    const low = () => {
        setLevel(1)
    }

    const mid = () => {
        setLevel(2)
    }

    const high = () => {
        setLevel(3)
    }

    useEffect(() => {
        const lesson = mock[`lesson${lessonNum}`]
        setSubject(lesson.Subject)
        setLevel(lesson.Confidence)
        setComplete(lesson.Confidence !== 0)
    }, [lessonNum])

    useEffect(() => {
        switch (level) {
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
        if (level !== 0) {
            setComplete(true)
        }
    }, [level, lessonNum])

    const handleLessonChange = (num) => {
        setLessonNum(num)
    }

    return (
        <div className='rate-container'>
            <div className='changer'>
                <div className='switch'>
                    <button onClick={() => handleLessonChange(1)} className='selector'>Lesson 1</button>
                    <button onClick={() => handleLessonChange(2)} className='selector'>Lesson 2</button>
                    <button onClick={() => handleLessonChange(3)} className='selector'>Lesson 3</button>
                    <button onClick={() => handleLessonChange(4)} className='selector'>Lesson 4</button>
                    <button onClick={() => handleLessonChange(5)} className='selector'>Lesson 5</button>
                </div>
                <div className='lesson-cont'>
                    <h1>Lesson {lessonNum}</h1>
                    <h1>{subject}</h1>
                    <div className='smiley'>
                        <h1>Confidence:</h1>
                        <Lottie options={dopOptions[dop]} />
                    </div>
                    <div>
                        <h1>Complete:</h1>
                        {complete ? <h1>Yes</h1> : null}
                    </div>
                </div>
                <div className='conf'>
                    <h1 className='vote-title'>confidence</h1>
                </div>
                <div className='enj'>
                    <h1 className='vote-title'>Enjoyment</h1>
                    <div onClick={low} className='smiley-1'>
                        <Lottie options={dopOptions.dop1} />
                    </div>
                    <div onClick={mid} className='smiley-2'>
                        <Lottie options={dopOptions.dop2} />
                    </div>
                    <div onClick={high} className='smiley-3'>
                        <Lottie options={dopOptions.dop3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rate