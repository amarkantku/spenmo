import styled from 'styled-components';

export const CarouselContainer = styled.div`
    width: 1550px;
    display: flex;
    flex-direction: column;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

export const Section = styled.div`
    width: 1470px;
`;

export const CarouseContentlWrapper = styled.div`
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid #AEB6BF; */

    ${Section} {
        :first-child,
        :last-child {
            width: 40px;
            z-index: 9999;
        }
    }
`;

export const CarouselContent = styled.div`
    display: flex;
    transition: all 250ms linear;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }

    &.show-${(p) => p.size} {
        max-width: calc(100% / ${(p) => p.size});
    }
`;
