import React from 'react';
import Walkings from './Walkings';
import Block from './Block';

function WalkingsBlock(props) {
    return(
        <Block>
            <Header/>
            <Walkings walkingsData={ props.walkingsData}/>
        </Block>
    )    
}

export default WalkingsBlock;