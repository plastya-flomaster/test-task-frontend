import React from 'react';
import Thead from './Thead'
import Tr from './Tr';
import Th from './Th';
import P from './P';


function TitleWalkings() {
    return(
      <Thead>
        <Tr bgColor="#1C2025">
            <Th marginLeft="16px"><P fontSize="14px" fontHeight="18px" color="#FFFFFF">Дата</P></Th>
            <Th><P fontSize="14px" fontHeight="18px" color="#FFFFFF">Дистанция</P></Th>
        </Tr>
      </Thead>
    )    
}

export default TitleWalkings;