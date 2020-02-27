import styled from 'styled-components';

export default styled.li`
    list-style: none;
    text-align: justify;
    height:40px;
    padding:0;
    align-items: center;
    background-color: ${props => props.bgColor && "#EFEFF0" };
`;