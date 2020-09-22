import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';
import { Container, Row, Col } from 'react-bootstrap';

function Query() {


    return <div>
        <Container className="stats" style={{ marginTop: '5%' }} >
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', margin: 'auto', marginBottom: '5%' }}>About Covid-19</h2>
            <Row xs={1} sm={1} md={2} lg={2} >

                <Col className='imgCol'>
                    <img className='covidImage' src="../../../img/covid.png" alt="covidImage" />
                </Col>
                <Col>
                    <div style={{ textAlign: 'left' }} className='desc-para' >
                        <h3 style={{ marginBottom: '5%' }}>What is Corona-Virus?</h3>
                        <p>Covid-19 is the infections disease caused by the most recently discovered coronavirus.
                        This new virus and disease were unknown before the outbreak began in Wuhan, China in December 2019.
            </p>
                        <p>Coronavirus are a large family of viruses which may cause illness in animals or humans. In humans,
                        sererals coronaviruses are known to cause respiratory infections ranging from the common cold to
                        more severe diseases such as Middle East Respiratory Syndrome (SARS). The most recently discovered coronaviruses
                        causes coronavirus disease COVID-19
            </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div >

}

export default Query;