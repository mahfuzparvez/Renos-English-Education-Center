import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Home.css';
import photo1 from '../../Image/home4.jpg';
import photo2 from '../../Image/home3.jpg';
import photo3 from '../../Image/home2.jpg';
import photo4 from '../../Image/home1.jpg';
import photo5 from '../../Image/teacher2.png';
import photo6 from '../../Image/teacher4.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* home page course div */}
            <div>
                <h2 className='my-3 text-info fw-bold'>Course</h2>
                <small>We provide more course go to the course page for details.</small>
            </div>
            <div className='card-div container'>
                <Card style={{ width: 'auto' }} className="Card">
                    <Card.Img className='img-fluid' variant="top" src={photo1} />
                    <Card.Body>
                        <Card.Title>Spoken English</Card.Title>
                        <Card.Text>
                            Many people feel shy or embarrassed when speaking English. Don't be. Act as if you are the most confident person you know - in fact, be the most confident 'you'. By acting 'as if' you are confident you create or strengthen neural networks in your brain and so the next time you speak you may feel more confident as you are used to this situation.  So, act confident, and over time you will feel confident, and indeed, be confident!
                        </Card.Text>
                    </Card.Body>
                    <Link to="/course"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                </Card>
                <Card style={{ width: 'auto' }} className="Card">
                    <Card.Img id='distrubIMG' className='img-fluid' variant="top" src={photo2} />
                    <Card.Body>
                        <Card.Title>TOEFL</Card.Title>
                        <Card.Text>
                            No matter how great your English may be, it’s still possible to be thrown off by the format of a test. Spend some time on the official TOEFL site to get familiar with the way it works, and to find out any information you need. Know that there are two ways for you to take the test --the internet based test (or iBT), and the paper-based test. The former is much more popular nowadays, and it’s likely the one you’ll be doing. But just in case, here’s how each is set out.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/course"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                </Card>
                <Card style={{ width: 'auto' }} className="Card">
                    <Card.Img className='img-fluid' variant="top" src={photo3} />
                    <Card.Body>
                        <Card.Title>IELTS</Card.Title>
                        <Card.Text>
                            The goal of IELTS Listening section is to test your listening skills. Don't use practice tests to improve your score: it's not enough! They will help you to become familiar with the test, but won't much improve your listening abilities. It is much more effective to do various listening exercises, listen to general listening materials (radio reports, TV-shows, documental programs etc) and only after that do IELTS Listening practice tests.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/course"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                </Card>
                <Card style={{ width: 'auto' }} className="Card">
                    <Card.Img className='img-fluid' variant="top" src={photo4} />
                    <Card.Body>
                        <Card.Title>SAT</Card.Title>
                        <Card.Text>
                            The SAT is designed to test a student's aptitude and knowledge in three subject areas: reading, writing, and math. Like the ACT, the SAT is used by colleges to evaluate an applicants eligibility for admission. The better a student scores on the SAT the better the chance of getting accepted to a reputable college or university.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/course"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                </Card>
            </div>
            {/* home page teacher div */}
            <div>
                <div>
                    <h2 className='my-2 text-info fw-bold'>Instructor</h2>
                    <small>Visit the instructor page for details about trainers</small>
                </div>
                <div className='homePageTeacherDiv'>
                    <CardGroup>
                        <Card className="teacherCard">
                            <Card.Img className='img-fluid' variant="top" src={photo5} />
                            <Card.Body>
                                <Card.Title className="teacherNameH_P">Jesper</Card.Title>
                                <Card.Title>IELTS</Card.Title>
                                <Card.Text>
                                    After the practice test, you should have a good idea of their weak points. The IELTS test is broken down into four parts: reading, speaking, listening and writing. While you should be teaching all aspects of the test, focus on the weak points of the students and provide them with extra activities. Bring it all the way back to basics for them if need be, and get them writing simple sentences if they make simple errors.
                                </Card.Text>
                            </Card.Body>
                            <Link to="/instructor"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                        </Card>
                        <Card className="teacherCard">
                            <Card.Img className='img-fluid' variant="top" src={photo6} />
                            <Card.Body>
                                <Card.Title className="teacherNameH_P">Anders</Card.Title>
                                <Card.Title>TOEFL</Card.Title>
                                <Card.Text>
                                    Plan, Produce, Proof - these are the keys to the writing section. Students must be made aware of the structural implications that their work has on their overall IELTS score. By planning, the student will lessen the risk of writing any word that pops into their mind and sticking to a structure as set out in the plan. Proof reading is also important, as students will lose marks on silly grammar and spelling errors one easy way to lose marks.
                                </Card.Text>
                            </Card.Body>
                            <Link to="/instructor"><Button type="button" className="btn btn-primary my-2">Details</Button></Link>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default Home;