import React, { useEffect, useState, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Spinner from './Spinner';

const Stats = () => {


    //World
    const [totWorldCases, setTotWorldCases] = useState(-1);
    const [totRecovCases, setTotRecovCases] = useState(0);
    const [totDeathWor, setTotDeathWor] = useState(0);
    const [todayCases, setTodayCases] = useState(0);
    //India
    const [totConfCases, setTotConfCases] = useState(-1);
    const [activeCases, setActiveCases] = useState(0);
    const [recovCases, setRecovCases] = useState(0);
    const [deathCases, setDeathCases] = useState(0);


    useEffect(() => {

        try {
            const searchWorldCases = async () => {
                const worldCases = await axios({
                    "method": "GET",
                    "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                        "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                        "useQueryString": true
                    }
                })
                const { total_cases, total_deaths, total_recovered, new_cases } = worldCases.data;
                setTotWorldCases(total_cases);
                setTotRecovCases(total_recovered);
                setTotDeathWor(total_deaths);
                setTodayCases(new_cases);
            }
            searchWorldCases();
        } catch (error) {
            console.log(error);
        }


    }, []);

    useEffect(() => {

        try {

            const searchCases = async () => {

                const indiaCases = await axios({
                    "method": "GET",
                    "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                        "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                        "useQueryString": true
                    }, "params": {
                        "country": "india"
                    }
                });
                console.log(indiaCases);
                const { active_cases, new_cases, total_cases, total_deaths, total_recovered } = indiaCases.data.latest_stat_by_country[0];

                setTotConfCases(total_cases);
                setActiveCases(active_cases);
                setRecovCases(total_recovered);
                setDeathCases(total_deaths);

            }
            searchCases();

        } catch (error) {
            console.log(error)
        }
    }, []);



    return (
        <div>
            {/* <Spinner /> */}
            {(totWorldCases || totConfCases) === -1 ? <div className='stats' style={{ width: '80%', margin: 'auto' }} ><Spinner /></div> : <Fragment>
                <Container className="stats">
                    <h3 style={{ marginBottom: '3%', fontWeight: 'bold' }}>World Updates</h3>
                    <Row style={{ color: '#fff' }} xs={1} sm={2} mb={4} lg={4}>
                        <Col>
                            <Card bg='dark' className='cardStyle'>
                                <h2 >{totWorldCases}</h2>
                                <p>Total Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='info' className='cardStyle'>
                                <h2 >{totRecovCases}</h2>
                                <p>Recovered Cases</p>
                            </Card>
                        </Col>

                        <Col>
                            <Card bg='danger' className='cardStyle'>
                                <h2 >{totDeathWor}</h2>
                                <p>Total Deceased</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='secondary' className='cardStyle'>
                                <h2 >{todayCases}</h2>
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
                                <h2 >{totConfCases}</h2>
                                <p>Confirmed Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='warning' className='cardStyle'>
                                <h2 >{activeCases}</h2>
                                <p>Active Cases</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='success' className='cardStyle'>
                                <h2 >{recovCases}</h2>
                                <p>Total Recovered</p>
                            </Card>

                        </Col>
                        <Col>
                            <Card bg='info' className='cardStyle'>
                                <h2>{deathCases}</h2>
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
