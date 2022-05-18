import { useState } from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Carousel from './components/Carousel/Carousel';
import CardInfo from './components/CardInfo/CardInfo';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import CardForm from './components/CardForm/CardForm';
import { useDispatch, useSelector } from 'react-redux';

import PlusIcon from './icons/Plus';
import { initialCardDetails } from './constants/constant';
import { getId } from './utils/utils';

import {
    AppContainer,
    Row,
    Title,
    AddNewCardContainer,
    AddNewCard,
    Label,
} from './App.styled';
import { addCard, updateCard } from './actions';
import NoRecords from './components/NoRecords/NoRecords';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [cardDetails, setCardDetails] = useState(initialCardDetails);

    const dispatch = useDispatch();
    const { cards } = useSelector((state) => state.cards);

    const handleCardClick = (cardInfo) => {
        setIsEditMode(true);
        setIsOpen(true);
        setCardDetails(cardInfo);
    };

    const handleOnSubmit = (cardInfo) => {
        if (isEditMode) {
            dispatch(updateCard(cardInfo));
        } else {
            dispatch(addCard({ ...cardInfo, id: getId() }));
        }
        reset();
    };

    const reset = () => {
        setIsEditMode(false);
        setIsOpen(false);
        setCardDetails(initialCardDetails);
    };

    return (
        <AppContainer data-testid={'app-container'}>
            <GlobalStyle />
            <Row data-testid={'card-title-row'}>
                <Title data-testid={'card-title'}>Cards</Title>
            </Row>
            <Row data-testid={'carousel-row'}>
                <AddNewCardContainer data-testid={'add-new-card-container'}>
                    <AddNewCard
                        data-testid={'add-new-card'}
                        onClick={() => setIsOpen(true)}
                    >
                        <Button
                            data-testid={'add-new-button'}
                            shape={'rounded'}
                            height={50}
                            width={50}
                        >
                            <PlusIcon />
                        </Button>
                        <Label data-testid={'add-new-label'}>
                            Add new card
                        </Label>
                    </AddNewCard>
                </AddNewCardContainer>

                {cards.length ? (
                    <Carousel
                        size={4}
                        data-testid={'carousel'}
                        disable={isOpen}
                    >
                        {cards.map((card) => {
                            return (
                                <CardInfo
                                    onClick={() => handleCardClick(card)}
                                    data-id={card.id}
                                    key={card.id}
                                    card={card}
                                />
                            );
                        })}
                    </Carousel>
                ) : (
                    <NoRecords>No card to display!</NoRecords>
                )}
            </Row>

            <Modal
                title={isEditMode ? 'Update Card Deatils' : 'Add a new card'}
                handleClose={reset}
                isOpen={isOpen}
            >
                <CardForm cardDetails={cardDetails} onSubmit={handleOnSubmit} />
            </Modal>
        </AppContainer>
    );
}

export default App;
