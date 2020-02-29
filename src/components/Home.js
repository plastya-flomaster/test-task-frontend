import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper'
import WalkingsBlock from './WalkingsBlock';
import WalkingAddForm from './WalkingAddForm';
import Context from '../context';

function Home() {
    let [walkingsData, setWalkingsData] = useState([]);
    let [walkingAddForm, setWalkingAddForm] = useState(false);

    const walkingOpenForm = () => setWalkingAddForm(true);
    const walkingCloseForm = () => setWalkingAddForm(false);

    useEffect(() => {
        fetch("http://localhost:3000/walking")
            .then(response => response.json())
            .then(data => {
                setWalkingsData(data);
            });
    }, []);

    function addWalking(date, distance) {
        setWalkingsData(walkingsData.concat([
            {
            date: date,
            distance: distance
            }
        ]));
        fetch('http://localhost:3000/walking/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ date: date, distance: distance})
          });       
    };


    return (
        <Context.Provider value={{ walkingOpenForm, walkingCloseForm, walkingsData }}>
        <Wrapper>
            <WalkingsBlock openForm={ walkingOpenForm } walkingsData={ walkingsData }/>
            {walkingAddForm && <WalkingAddForm onCreate={ addWalking }/>}
        </Wrapper>
        </Context.Provider>  
    )
};
export default Home;