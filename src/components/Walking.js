import React from "react";
import Tr from './Tr';
import Th from './Th';
import Distance from './Distance'
import WalkingDate from "./Date";
import Button from "./Button";

function primeriDetect(id){
    if (id % 2 !== 0){
        return "#FFFFFF";
    }
}

function Walking( props ) {
    return (
     <Tr bgColor={ primeriDetect(props.walking.id) }>
        <Th marginLeft="16px"><WalkingDate date={ props.walking.date }/></Th>
        <Th><Distance distance={ props.walking.distance }/></Th>
        <Th minWidth={"1px"} textAlign={"center"}><Button/>I</Th> 
    </Tr>
)}
export default Walking;