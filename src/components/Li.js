import React from "react";
import styled from 'styled-components';

const Li = styled.li`
    list-style: none;
`;
function Li(props) {
    return (
        <Li>{ props.content }</Li>
    )
}

export default Li;