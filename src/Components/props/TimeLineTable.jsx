import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import TableItem from './TableItem';
import nextId from "react-id-generator";
import Spinner from './Spinner';

const TimeLineTable = ({ array }) => {



    function newRow(data) {
        return <TableItem
            key={nextId()}
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
                    return newRow(entry);
                })}
            </tbody>

        </Table>

    )
}

export default TimeLineTable;
