import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 100%;
    scroll-behavior: smooth;
    /* border: 1px solid #AEB6BF; */
`;

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* border: 1px solid #AEB6BF; */
    margin: 2px;
`;

export const Title = styled.div`
    color: #2e4053;
    font-weight: 600;
    font-size: 1.25rem;
    padding: 5px;
`;

export const Label = styled.div``;
export const AddNewCard = styled.div``;
export const AddNewCardContainer = styled.div`
    height: 225px;
    /* border: 1px dashed #AEB6BF; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 10%;
    margin: 5px;

    ${AddNewCard} {
        height: 130px;
        width: 98%;
        border: 1px dashed #aeb6bf;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        cursor: pointer;
        padding: 5px;

        ${Label} {
            padding: inherit;
            color: #aeb6bf;
        }
    }
`;
