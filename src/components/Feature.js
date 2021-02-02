import React from 'react'
import './Features.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Feature() {
    return (
        <>
        <div className="container" style={{paddingBottom: '60px'}}>
            <Card className='featureContainerCard container'>
                <Card.Header> 
                    <h1 style={{ color: 'white'}}> Online Workshops</h1>
                     </Card.Header>
                <CardDeck>
                <Card style={{ width: '20rem', padding: '10px', paddingRight:'10px', marginRight: '40px', marginLeft: '30px'}}>
                    <Card.Img variant="top" src="images/video1.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                    <Card.Body>
                        <Card.Title>JavaScript Level 2</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '10px', paddingRight:'10px', marginRight: '40px' }}>
                    <Card.Img variant="top" src="images/video2.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                    <Card.Body>
                        <Card.Title>Emotional Intelligence</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '10px', paddingRight:'10px', marginRight: '40px' }}>
                    <Card.Img variant="top" src="images/video3.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                    <Card.Body>
                        <Card.Title>Perfect Presentations</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', padding: '10px', paddingRight:'', marginRight: '40px' }}>
                    <Card.Img variant="top" src="images/video4.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                    <Card.Body style={{ paddingBottom: '-50px'}}>
                        <Card.Title>Data Analytics</Card.Title>
                    </Card.Body>
                </Card>
                </CardDeck>
            </Card>
            
            <div className="row container">
                <Card className='featureContainerCard col-sm-6'>
                    <Card.Header> 
                    <h1 style={{ color: 'white'}}> Career Centre</h1>
                    </Card.Header>
                        <Card >
                        <Card.Img variant="top" src="images/video4.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                        <Card.Body style={{ paddingBottom: '-50px'}}>
                            <Card.Title>Career Fair Winter 2020</Card.Title>
                        </Card.Body>
                        </Card>
                        <Card style={{marginTop: '40px'}}>
                        <Card.Img variant="top" src="images/video4.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                        <Card.Body style={{ paddingBottom: '-50px'}}>
                            <Card.Title>Open Software Developer Roles</Card.Title>
                        </Card.Body>
                        </Card>     
                </Card>
                <Card className='featureContainerCard col-sm-6' style={{ marginRight: '-20px'}}>
                    <Card.Header> 
                    <h1 style={{ color: 'white'}}> Recommended Clubs</h1>
                    </Card.Header>
                    <Card >
                        <Card.Img variant="top" src="images/video4.png" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                        <Card.Body style={{ paddingBottom: '-50px'}}>
                            <Card.Title>Virtual Running Club</Card.Title>
                        </Card.Body>
                        </Card>
                        <Card style={{marginTop: '40px'}}>
                        <Card.Img variant="top" src="images/chess.jpeg" height="150" style={{ paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px' }}/>
                        <Card.Body style={{ paddingBottom: '-50px'}}>
                            <Card.Title>Virtual Chess Club</Card.Title>
                        </Card.Body>
                        </Card>   
                </Card>
            </div>
        </div>
        </>
    )
}

export default Feature
