import React from "react";
import Walking from './Walking';
import Ul from './Ul';

function Walkings (props) {
    return (
      <Ul>
       { props.walkingsData.map( walking => {
        return <Walking walking={walking}/>
      }) }
      </Ul>
    )
}

export default Walkings;