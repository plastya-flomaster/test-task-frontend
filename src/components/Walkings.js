import React from "react";
import CustomScrollbars from './CustomScrollbars';
import Walking from './Walking';
import Table from "./Table";

function Walkings (props) {
    return (
      <CustomScrollbars style={{ width: "335px" }}>
      <tr> 
        <th  style={{padding: 0}}>
        <Table margin="0">
        { props.walkingsData.map( walking => {
          return <Walking key={ walking.id } walking={walking} />
        }) }
        </Table>
        </th>
      </tr>
      </CustomScrollbars>
    )
}

export default Walkings;