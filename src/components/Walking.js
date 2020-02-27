import React from "react";
import Li from './Li';
import Part from './Part';
import Distance from './Distance'
import WalkingDate from "./Date";

function primeriDetect(id){
    if (id % 2 === 0){
        return true;
    }
}

function Walking( props ) {
    return (
     <Li bgColor={ primeriDetect(props.walking.id) }>
        <Part marginLeft="16px"><WalkingDate date={ props.walking.date }/></Part>
        <Part><Distance distance={ props.walking.distance }/></Part>        
    </Li>
)}
export default Walking;