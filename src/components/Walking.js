import React from "react";
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
`;

function Walking( props ) {
    return <Li>{ props.walking.distance }</Li>
}
export default Walking;