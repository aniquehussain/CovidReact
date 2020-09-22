import React from 'react'

const TableItem = ({ country, total, recovered, deaths }) => {
    return (
        <tr>
            <td>{country}</td>
            <td>{total}</td>
            <td>{recovered}</td>
            <td>{deaths}</td>
        </tr>
    )
}

export default TableItem;
