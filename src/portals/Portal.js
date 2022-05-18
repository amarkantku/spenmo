import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createAndAppendToBody = (id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
    return element;
};

const Portal = ({ children, wrapperId = 'portal-wrapper' }) => {
    const [wrapperElement, setWrapperElement] = useState(null);
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let isCreated = false;
        if (!element) {
            // if element is not present create and append to body
            isCreated = true;
            element = createAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // clean up
            if (isCreated && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
    }, [wrapperId]);

    if (wrapperElement === null) return null;
    return createPortal(children, wrapperElement);
};

export default Portal;
