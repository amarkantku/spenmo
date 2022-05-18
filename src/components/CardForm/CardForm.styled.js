import styled from 'styled-components';

export const CardFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FormGroup = styled.div`
    display: block;
    width: 100%;
    margin: 5px auto;
`;

export const Label = styled.label`
    margin-bottom: 0.25em;
    display: block;
`;

export const Input = styled.input`
    height: 35px;
    width: 100%;
    padding: 0.25em;
    border-radius: 3px;
    margin-bottom: 0.5em;
    outline: none;

    border: 1px solid ${(props) => props.theme.secondary};
    :focus {
        outline: 1px solid ${(props) => props.theme.secondary};
    }
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Input} {
        width: calc(100% / 2 - 5px);
    }
`;
