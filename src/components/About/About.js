import React from 'react'
import{Container,Row,Col} from 'react-bootstrap';
import './About.css'
const About = () => {
  return (
    <section id="about" className='pad'>
        <Container>
      <Row>
        <Col className='Col'>
        <img
              alt=""
              src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
              width="350"
            />
        </Col>
        <Col xs='12'className='Col'>
            <h3>About Us</h3>
            <p><b>CHEF FOOD</b> was established in the year 2000. we has been continuing our quality and services in the food for the past 24 years.
            The Aim and Quote of our management is hustle,
            loyality,respect with customers.Delicious Food for your deserving ones....</p>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default About