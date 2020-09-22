import React, { useState } from 'react';
import Body from './props/Body'
import Header from './props/Header';
import Query from './props/Query';
import { Button, Row, Col, Container } from 'react-bootstrap';
import Stats from './props/Stats';
import Symptoms from './props/Symptoms';



function Home() {



    return (
        <div>
            <Header />
            <main>
                <Stats />
                <Query />
                <Symptoms />
                <Body />
            </main>
        </div>
    )
}

export default Home;