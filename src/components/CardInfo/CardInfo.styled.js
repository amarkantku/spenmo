import styled from 'styled-components';

export const CardInfoContainer = styled.div`
    display: flex;
    height: 200px;
`;

export const CardInfoContent = styled.div`
    display: flex;
    margin: 0 10px;
    width: 100%;
    border-radius: 15px;

    div {
        display: flex;
        flex-direction: column;
        width: 75%;

        svg {
            height: 50px;
            width: 50px;
        }

        div,
        .companyIcon {
            width: 100%;
        }

        .companyIcon {
            font-size: 30px;
        }

        .info {
            font-size: 16px;
            padding: 3px 1px 2px 15px;
            color: ${(p) => p.theme.colors.white};
            font-weight: bold;
        }
    }

    div.icon img:first-child {
        position: relative;
        top: -10px;
    }

    div.icon:last-child {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 25%;
    }
`;
