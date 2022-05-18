import shortid from 'shortid';
import { CARD_MASK_REGEX } from '../constants/constant';

export const getId = () => {
    return shortid.generate();
};

export const maskify = (cardNo, symbol = '*') => {
    return cardNo.replace(CARD_MASK_REGEX, symbol);
};
