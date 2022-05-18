import styled from 'styled-components';
import { memo } from 'react';

export const ArrowNavButton = styled.button`
    height: 200px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(p) => p.theme.body};
    color: ${(p) => p.theme.primary};
    padding: 0;
    border: 0;
    outline: 0;
    cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
    z-index: 99;
    ${(p) => {
        if (p.disabled) {
            return 'pointer-events: none';
        }
    }}
`;

const ArrowButton = ({ onClick, children, ...restProps }) => {
    return (
        <ArrowNavButton
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            {...restProps}
        >
            {children}
        </ArrowNavButton>
    );
};

export default memo(ArrowButton);
