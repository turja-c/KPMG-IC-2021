import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function About() {
    return (
        // <div style={{backgroundColor: 'black'}}>
        <Container style={{ paddingTop: '80px', paddingBottom: '120px'}}>
        <Row className="container">
            <Card style={{ width: '20rem', padding: '10px', marginRight: '40px' }}>
                <Card.Img variant="top" src="images/image1.svg" height="200" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                <Card.Body>
                    <Card.Title>Analyze Progression</Card.Title>
                    <Card.Text>
                        Track and measure the performance within each course by understanding the past history
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', padding: '10px', paddingRight:'10px', marginRight: '40px' }}>
                <Card.Img variant="top" src="images/image2.svg" height="200" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                <Card.Body>
                    <Card.Title>Optimize Data</Card.Title>
                    <Card.Text>
                    Leverage your own usage and create an optimized platform that is tailored to you.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', padding: '10px', marginRight: '40px' }}>
                <Card.Img variant="top" src="images/image3.svg" height="200" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                <Card.Body>
                    <Card.Title>Adapt To Changes</Card.Title>
                    <Card.Text>
                        This interactive platform provides the opportunity to constantly change and fit to your education.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
        </Container>
        // </div>
    )
}

export default About
