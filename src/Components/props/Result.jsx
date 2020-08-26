import React from 'react';


function Result(props) {
    return <div>
        <div className="stats">

            <h2 className="shead">STATISTICS</h2><br /><br />
            <p>Total Cases:{props.total} </p>
            <p>New Cases: {props.newC}</p>
            <p>Recovered Cases: {props.recov}</p>
            <p>Total Deceased:  {props.dead}</p>
        </div>

    </div>
}

export default Result;