import React from 'react';
import Walkings from './Walkings';
import Table from './Table';
import TitleWalkings from './TitleWalkings';
import WalkingAddButton from './WalkingAddButton';

function WalkingsBlock(props) {
    return(
        <Table>
            <TitleWalkings/>
            <Walkings walkingsData={ props.walkingsData}/>
            <WalkingAddButton openForm={ props.openForm }/>
        </Table>
    )    
}

export default WalkingsBlock;