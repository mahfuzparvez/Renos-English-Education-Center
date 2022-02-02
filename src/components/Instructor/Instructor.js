import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Instructor.css';
import photo from '../../Image/teacher1 (1).png'

const Instructor = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch('instructor.JSON')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div>
            <h1 className='my-4 text-primary'>Let's get acquainted with the trainer</h1>
            <div className='cardBox'>
                {
                    instructor.map(instructor => (<CardGroup className='teacherCardBox'>
                        <Card className='teacherCard'>
                            <Card.Img variant="top" src={instructor.img} />
                            <Card.Body className='cardBody'>
                                <Card.Title className='teacherName'>{instructor.name}</Card.Title>
                                <p id='department'>Department- {instructor.department}</p>
                                <Card.Text>
                                    {instructor.dream}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>))
                }
            </div>
        </div>
    );
};
export default Instructor;