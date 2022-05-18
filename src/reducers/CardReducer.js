import { ADD_CARD, UPDATE_CARD } from '../actionTypes';
import cardJson from '../data/cards.json';
import { getId } from '../utils/utils';

const initialState = {
    cards: cardJson.map((card) => {
        card.id = getId();
        return card;
    }),
};

export default function CardReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        case UPDATE_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => {
                    if (card.id === action.payload.id) {
                        card = action.payload;
                    }
                    return card;
                }),
            };
        default:
            break;
    }
    return state;
}
