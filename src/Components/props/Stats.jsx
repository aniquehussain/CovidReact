import React, { useEffect, Fragment, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Spinner from './Spinner';
import CovidContext from '../../context/covid/covidContext';

const Stats = () => {

    const covidContext = useContext(CovidContext);
    const {
        loading,
        totalWorldCases,
        worldDeathCases,
        worldRecoveredCases,
        worldNewCases,
        indiaRecovCases,
        indiaTotalCases,
        indiaDeathCases,
        indiaActiveCases

    } = covidContext;

    useEffect(() => {

        try {
            covidContext.searchWorldCases();
        } catch (error) {
            console.log(error);
        }


    }, []);

    useEffect(() => {

        try {
            covidContext.searchIndiaCases();
        } catch (error) {
            console.log(error)
        }
    }, []);



    return (
        <div>
            {loading ? <div className='stats' style={{ width: '80%', margin: 'auto' }} ><Spinner /></div> : <Fragment>
                <Container className="stats">
                    <h3 style={{ marginBottom: '3%', fontWeight: 'bold' }}>World Updates</h3>
                    <Row style={{ color: '#fff' }} xs={1} sm={2} mb={4} lg={4}>
                        <Col>
                            <Card bg='dark' className='cardStyle'>
                                <h2 >{totalWorldCases}</h2>
                                <p>Total Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='info' className='cardStyle'>
                                <h2 >{worldRecoveredCases}</h2>
                                <p>Recovered Cases</p>
                            </Card>
                        </Col>

                        <Col>
                            <Card bg='danger' className='cardStyle'>
                                <h2 >{worldDeathCases}</h2>
                                <p>Total Deceased</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='secondary' className='cardStyle'>
                                <h2 >{worldNewCases}</h2>
                                <p>Cases Today</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container className="stats">
                    <h3 style={{ marginBottom: '5%', marginTop: '-8%', fontWeight: 'bold' }}>India Updates</h3>
                    <Row style={{ color: '#111' }} xs={1} sm={2} mb={4} lg={4} >
                        <Col>
                            <Card bg='light' className='cardStyle'>
                                <h2 >{indiaTotalCases}</h2>
                                <p>Confirmed Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='warning' className='cardStyle'>
                                <h2 >{indiaActiveCases}</h2>
                                <p>Active Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='success' className='cardStyle'>
                                <h2 >{indiaRecovCases}</h2>
                                <p>Total Recovered</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='info' className='cardStyle'>
                                <h2>{indiaDeathCases}</h2>
                                <p>Total Deceased</p>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Fragment>}

        </div>
    )
}

export default Stats;
