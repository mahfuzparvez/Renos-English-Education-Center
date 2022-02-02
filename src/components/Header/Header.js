import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import photo1 from '../../Image/pexels-vanessa-garcia-6325984.jpg';
import photo2 from '../../Image/pexels-keira-burton-6146978.jpg';
import photo3 from '../../Image/pexels-katerina-holmes-5905709.jpg';
import './Header.css';


const Header = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Renos English Learning Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="navlink" to="/home">Home</Link>
                            <Link className="navlink" to="/course">Course</Link>
                            <Link className="navlink" to="/instructor">Instructor</Link>
                            <Link className="navlink" to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* slider */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 SlideImg"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='slideheader'>Renos Online English Learning Center</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 SlideImg"
                        src={photo2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='slideheader'>Group study of Renos Students</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 SlideImg"
                        src={photo3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='slideheader'>Renos Child Fun Online Classes for Students</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;