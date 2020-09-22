import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';



function Body() {

    return <div>
        <Container className='stats prevention'>
            <h2>Prevention</h2>
            <Row xs={1} sm={1} md={3} lg={3}>
                <Col>
                    <img className="ico ico1" src="img/stay-home.png" alt="" />
                    <h3>Quarantine</h3>
                    <p >Stay home,Stay safe.</p>
                </Col>
                <Col>
                    <img className="ico ico1" src="img/queue.png" alt="" />
                    <h3 >Social Distancting</h3>
                    <p >Avoid social contact.</p>
                </Col>
                <Col>
                    <img className="ico ico1" src="img/man.png" alt="" />
                    <h3 >Hygiene</h3>
                    <p >Use sanitizer,mask and maintain hygiene</p>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={3} lg={3}>
                <Col>
                    <img className="ico ico1" src="img/alcohol.png" alt="" />
                    <h3>Use Hand Sanitizer</h3>
                    <p >Sanitize you hands often.</p>
                </Col>
                <Col>
                    <img className="ico ico1" src="img/face.png" alt="" />
                    <h3 >Self Isolate</h3>
                    <p >Use face sheild.</p>
                </Col>
                <Col>
                    <img className="ico ico1" src="img/cleaning-spray.png" alt="" />
                    <h3 >Maintain Hygiene</h3>
                    <p >Disinfect your house often</p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Body;