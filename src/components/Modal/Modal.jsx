import { memo } from 'react';
import Portal from '../../portals/Portal';
import CloseIcon from '../../icons/Close';
import {
    ModalBlock,
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
} from './Modal.styled';

const Modal = ({ title, footer, children, isOpen, handleClose }) => {
    if (!isOpen) return null;
    return (
        <Portal wrapperId="modal-portal">
            <ModalBlock>
                <ModalOverlay />
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>
                        <ModalClose onClick={handleClose}>
                            <CloseIcon />
                        </ModalClose>
                    </ModalHeader>
                    <ModalBody>{children}</ModalBody>
                    {footer && <ModalFooter>{footer}</ModalFooter>}
                </ModalContainer>
            </ModalBlock>
        </Portal>
    );
};
export default memo(Modal);
