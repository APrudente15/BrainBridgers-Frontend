import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Discover = () => {
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
        return isNaN(average) ? 0 : average;
    };
    return (
        <BarChart width={800} height={500} data={data} margin={{ bottom: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subjectName" interval={0} angle={-45} textAnchor="end" />
            <YAxis domain={[1, 3]} />
            <Tooltip />
            <Bar dataKey="averageConfidence" fill="#82ca9d" name="Average Confidence" />
            <Bar dataKey="averageEnjoyment" fill="#8884d8" name="Average Enjoyment" />
        </BarChart>
    )
}

export default Discover