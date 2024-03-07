import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, Legend } from 'recharts';

const Discover = ({ name }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/students/1/lessons');
                const { lessons } = await response.json();
                const processedData = processLessonData(lessons);
                setData(processedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const processLessonData = (lessons) => {
        const subjectRatings = {};

        lessons.forEach((lesson) => {
            const { subjectName, confidence, enjoyment } = lesson;

            if (!subjectRatings[subjectName]) {
                subjectRatings[subjectName] = { confidence: [], enjoyment: [] };
            }

            subjectRatings[subjectName].confidence.push(confidence);
            subjectRatings[subjectName].enjoyment.push(enjoyment);
        });

        const averagedData = Object.keys(subjectRatings).map((subjectName) => {
            const averageConfidence = calculateAverage(subjectRatings[subjectName].confidence);
            const averageEnjoyment = calculateAverage(subjectRatings[subjectName].enjoyment);

            return { subjectName, averageConfidence, averageEnjoyment };
        });

        return averagedData;
    };

    const calculateAverage = (ratings) => {
        const validRatings = ratings.filter((rating) => rating >= 1 && rating <= 3);
        if (validRatings.length === 0) {
            return 0;
        }

        const sum = validRatings.reduce((acc, rating) => acc + rating, 0);
        const average = sum / validRatings.length;

        const roundedAverage = parseFloat(average.toPrecision(3));

        return isNaN(roundedAverage) ? 0 : roundedAverage;
    };

    return (
        <div className='dp'>
            <h1 className='welc'>Welcome {name}!</h1>
            <div className='chart-cont'>
                <h1 className='bc-title'>Average Confidence & Enjoyment Ratings</h1>
                <BarChart width={1100} height={700} data={data} margin={{ bottom: 100 }} className='bchart'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subjectName" interval={0} angle={-45} textAnchor="end" />
                    <YAxis domain={[1, 3]}>
                        <Label value={'Average Rating out of 3'} angle={-90} />
                    </YAxis>
                    <Tooltip />
                    <Bar dataKey="averageConfidence" fill="#82ca9d" name="Average Confidence" />
                    <Bar dataKey="averageEnjoyment" fill="#8884d8" name="Average Enjoyment" />
                </BarChart>
            </div>
        </div>
    )
}

export default Discover