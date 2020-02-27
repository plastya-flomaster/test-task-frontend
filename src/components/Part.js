import styled from 'styled-components';

export default styled.div`
    display: inline-block;
    text-align: left;
    min-width: 41%;
    margin: 8px 0;
    margin-left: ${props => props.marginLeft || "6px"};
    padding: 0;    
    vertical-align: middle; 
`;