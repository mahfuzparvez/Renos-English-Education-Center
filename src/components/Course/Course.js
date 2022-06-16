import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, } from 'react-bootstrap';
import './Course.css';

const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('course.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <div><h2 className='mt-3 text-info fw-bold'>WE OFFER THIS COURSE</h2></div>
            <div className='cardDiv'>
                {
                    course.map(course => (<CardGroup className='fullCardBox'>
                        <Card className='card'>
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {course.text}
                                </Card.Text>
                            </Card.Body>
                            <Button id='button' variant="primary" size="lg">Course Details</Button>
                        </Card>
                    </CardGroup>))
                }
            </div>
        </div>
    );
};
export default Course;