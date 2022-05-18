import { useMemo, Children, useState, useEffect } from 'react';
import {
    CarouselContainer,
    CarouselWrapper,
    CarouseContentlWrapper,
    CarouselContent,
    Section,
} from './Carousel.styled';

import ArrowButton from '../Button/ArrowButton';
import ArrowPrev from '../../icons/ArrowPrev';
import ArrowNext from '../../icons/ArrowNext';

const Carousel = ({
    children, // all children elements inside carousel
    size, // no of element to be display
    disable, // to disable arrow button if modal is open
}) => {
    const length = useMemo(() => Children.count(children), [children]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        if (currentIndex === size || currentIndex === length) {
            setTransitionEnabled(true);
        }
    }, [currentIndex, size, length]);

    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    const next = () => {
        if (currentIndex < length - size) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    return (
        <CarouselContainer data-testid={'carousel-container'}>
            <CarouselWrapper data-testid={'carousel-wrapper'}>
                <CarouseContentlWrapper
                    data-testid={'carousel-content-wrapper'}
                >
                    <Section data-testid={'carousel-prev-arrow-section'}>
                        <ArrowButton
                            disabled={disable}
                            onClick={previous}
                            data-testid="previous-arrow"
                        >
                            <ArrowPrev />
                        </ArrowButton>
                    </Section>

                    <Section data-testid={'carousel-main-section'}>
                        <CarouselContent
                            className={`show-${size}`}
                            size={size}
                            data-testid={'carousel-content'}
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                                transition: !isTransitionEnabled
                                    ? 'none'
                                    : 'all 0.5s ease-out',
                            }}
                        >
                            {children}
                        </CarouselContent>
                    </Section>

                    <Section data-testid={'carousel-next-arrow-section'}>
                        <ArrowButton
                            disabled={disable}
                            onClick={() => next()}
                            data-testid="next-arrow"
                        >
                            <ArrowNext />
                        </ArrowButton>
                    </Section>
                </CarouseContentlWrapper>
            </CarouselWrapper>
        </CarouselContainer>
    );
};

export default Carousel;
