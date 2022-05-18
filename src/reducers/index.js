import { combineReducers } from 'redux';
import CardReducer from './CardReducer';

const rootReducer = combineReducers({
    cards: CardReducer,
});

export default rootReducer;
