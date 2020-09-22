import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import TableItem from './TableItem';

const TimeLineTable = () => {

    const [count, setCount] = useState(0);
    const [country, setCountry] = useState('');
    const [total, setTotal] = useState(0);
    const [recov, setRecov] = useState(0);
    const [deaths, setDeaths] = useState(0);

    let array = [];

    useEffect(() => {
        const getTimeline = async () => {
            const myData = await axios({
                "method": "GET",
                "url": "https://covid-193.p.rapidapi.com/statistics",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "1fc1a156b8mshb01d5ed20621a31p1602c3jsnab438f067e3a",
                    "useQueryString": true
                }
            });

            let dataArray = myData.data.response;

            dataArray.forEach((data) => {

                array.push(data);
            })

            console.log(array);

        };

        getTimeline()
    }, [])

    function newRow(data) {
        return <TableItem
            key={count}
            country={data.country}
            total={data.cases.total}
            recovered={data.cases.recovered}
            deaths={data.deaths.total}
        />
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Infected</th>
                    <th>Recovered</th>
                    <th>Deceased</th>
                </tr>
            </thead>
            <tbody>
                {array.map((entry) => {
                    setCount(count + 1)
                    return newRow(entry)
                })}
            </tbody>

        </Table>

    )
}

export default TimeLineTable;
// eslint-disable-next-line no-lone-blocks
{/* <TableItem
                                key={count}
                                country={entry.country}
                                total={entry.cases.total}
                                recovered={entry.cases.recovered}
                                deaths={entry.deaths.total}
                            // /> */}

// eslint-disable-next-line no-lone-blocks
{/* <form noValidate>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    onChange={e => e.target.value}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form> */}