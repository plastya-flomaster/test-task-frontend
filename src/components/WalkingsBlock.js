import React from 'react';
import Walkings from './Walkings';
import Table from './Table';
import TitleWalkings from './TitleWalkings';
import WalkingAdd from './WalkingAdd';

function WalkingsBlock(props) {
    return(
        <Table>
            <TitleWalkings/>
            <Walkings walkingsData={ props.walkingsData}/>
            <WalkingAdd onClick={props.onClick}/>
        </Table>
    )    
}

export default WalkingsBlock;