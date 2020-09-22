import React from 'react';
import Header from './props/Header';
import { Container, Row, Col } from 'react-bootstrap';
//Developer in Navbar and About in all others
function About() {
    return (
        <div>
            <Header />
            <main>
                <Container className='stats'>
                    <h2 style={{ marginBottom: '5%', fontWeight: 'bold' }}>About</h2>
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col>
                            <img src="../../img/profile.png" alt="" className="myProfile" />
                        </Col>
                        <Col>
                            <div className="card-body profile-head">
                                <h5 className="card-title">SYED ANIQUE HUSSAIN</h5>
                                <div className='profile-text'>
                                    <p className="card-text profession"><small className="text-muted">Full Stack Web developer &amp; Software developer</small></p>
                                    <p className="card-text">Hey,I'm Syed Anique Hussain.A software and web developer.I'm a student of Computer &amp; Science Engineering <br /><b><br />Some facts about me:  </b>I'm enthiusiastic about computers,I get driven by new technologies<br /><a href="mailto:aniquehussain@gmail.com">Contact me</a> for work.</p>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </Container>

            </main>
        </div>
    )
}

export default About;