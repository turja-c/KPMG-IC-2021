import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Jumbo() {
    const divStyle = {
        paddingTop: '150px',
        paddingBottom: '150px',
        backgroundImage: `url(./images/jumbo.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      };

    return (
        <Jumbotron style={divStyle}  >
            <div className="container">
            <h1>Learning that gets better as you do </h1>
            <p style={{ fontSize: '20px'}}>
                Institions are struggling to pivot and create the resources you need during these times
                <br></br>
                Curious to learn more? 
            </p>
            <p>
                <Button variant="primary">Get Started</Button>
            </p>
            </div>
        </Jumbotron>
    )
}

export default Jumbo
