import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Symptoms = () => {
    return (
        <div>
            <Container className='stats prevention'>
                <h2>Symptoms</h2>
                <Row xs={1} sm={1} md={4} lg={4}>
                    <Col>
                        <img className="ico ico1" src="img/cough.png" alt="" />
                        <h3>Cough</h3>
                    </Col>
                    <Col>
                        <img className="ico ico2" src="img/fever.png" alt="" />
                        <h3 >Fever</h3>
                        <p ></p>
                    </Col>
                    <Col>
                        <img className="ico ico3" src="img/breathing.png" alt="" />
                        <h3 >Congestion</h3>

                    </Col>
                    <Col>
                        <img className="ico ico1" src="img/sore-throat.png" alt="" />
                        <h3>Sore Throat</h3>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Symptoms
