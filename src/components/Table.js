import styled from 'styled-components';

export default styled.table`
    border-collapse: collapse;  
    width: ${props => props.width || "335px"};
    margin-left: ${props => props.margin || "140px"};
`;