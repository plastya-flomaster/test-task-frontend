import React from 'react';
import Wrapper from './Wrapper'
import WalkingsBlock from './WalkingsBlock';



function loadWalkings() {
    
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'http://localhost:3000/walking', false);
    
    xhr.send();
    
    if (xhr.status !== 200 && xhr.status !== 304) {
      alert( xhr.status + ': ' + xhr.statusText );
    } else { 
       return  JSON.parse(xhr.responseText);
    }
}

function Home() {
    var walkingsData  = loadWalkings();
    return (        
        <Wrapper>
            <WalkingsBlock walkingsData={ walkingsData }/>
        </Wrapper>
    )
}

export default Home;