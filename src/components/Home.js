import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper'
import WalkingsBlock from './WalkingsBlock';


function addWalking() {
    let walking = {
        date: '2019-10-24T09:39:06.654Z',
        distance: '13658'
      };
    let response = fetch('http://localhost:3000/walking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(walking)
      });
}

function Home() {
    let [walkingsData, setWalkingsData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/walking")
            .then(response => response.json())
            .then(data => {
                setWalkingsData(data);
            });
    }, []);

    return (        
        <Wrapper>
            <WalkingsBlock onClick={addWalking} walkingsData={ walkingsData }/>
        </Wrapper>
    )
};
export default Home;