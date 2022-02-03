import React from 'react';
import './contact.css';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import photo from '../../Image/graphic-cartoon-character-contact-us-vector-36725959.jpg';

const Contact = () => {
    return (
        <div>
            {/* Header */}
            <Form.Label htmlFor="basic-url"><h3 id="pageheading">If you would like to contact us, please fill out the from below.</h3></Form.Label>
            {/* massage div */}
            <div className='fullpage container'>
                <div >
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Fullname:</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Email:</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Phone:</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Course:</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">Contact topic:</InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <InputGroup id='massagebox'>
                        <InputGroup.Text>Your Massage:</InputGroup.Text>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Button id='sendbtn' variant="primary" type="submit"><span id='btnfont'>< BsArrowUpRightCircle /></span>Send</Button>
                </div>
                {/* image div */}
                <div>
                    <img id='image' src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;