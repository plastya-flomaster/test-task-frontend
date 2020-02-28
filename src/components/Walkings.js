import React from "react";
import Walking from './Walking';
import Tbody from './Tbody';

function Walkings (props) {
    return (
      <Tbody>
       { props.walkingsData.map( walking => {
        return <Walking key={ walking.id }walking={walking}/>
      }) }
      </Tbody>
    )
}

export default Walkings;