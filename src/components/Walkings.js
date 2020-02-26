import React from "react";
import Walking from './Walking';

function loadWalkings() {

var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/walking', false);

xhr.send();

if (xhr.status !== 200 && xhr.status !== 304) {
  alert( xhr.status + ': ' + xhr.statusText );
} else {
    return  JSON.parse(xhr.responseText);
}
}

function Walkings () {
    var walkingsDate = loadWalkings();
    return (
      <ul>
       { walkingsDate.map( walking => {
        return <Walking walking={walking}/>
      }) }
      </ul>
    )
}

export default Walkings;