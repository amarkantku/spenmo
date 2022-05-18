import styled from 'styled-components';

export const ModalBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 40%;
    left: 50%;
    padding: 0.4rem;
    overflow: hidden;
    opacity: 1;
    transform: translate(-50%, -50%);
    z-index: 400;
`;

export const ModalOverlay = styled.a`
    background: rgba(247, 248, 249, 0.75);
    bottom: 0;
    cursor: default;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

export const ModalContainer = styled.div`
    background-color: ${(p) => p.theme.body};
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    /* max-height: 75vh; */
    max-width: 500px;
    padding: 0 0.8rem;
    width: 100%;
    animation: slide-down 0.2s ease 1;
    z-index: 1;
    box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #303742;
    padding: 20px 10px;
`;

export const ModalTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
`;

export const ModalClose = styled.a`
    cursor: pointer;
    font-size: 1rem;
`;

export const ModalBody = styled.div`
    overflow-y: auto;
    padding: 0px 10px 30px 10px;
    position: relative;
`;

export const ModalFooter = styled.div`
    padding: 10px 0px;
    text-align: right;
`;
