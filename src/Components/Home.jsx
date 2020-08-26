import React from 'react';
import Body from './props/Body'
import Header from './props/Header';
import Query from './props/Query';




function Home() {
    return (
        <div>
            <Header />
            <Query />
            <Body />
        </div>
    )
}

export default Home;