import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    color: ${(p) => p.theme.secondary};
`;

const NoRecords = ({ children }) => {
    return <StyledBox>{children}</StyledBox>;
};
export default NoRecords;
