export const initialCardDetails = {
    cardHolderName: '',
    cardLastFourDigit: '',
    expiry: {
        month: '',
        year: '',
    },
    color: '#FFFFFF',
};

export const CARD_MASK_REGEX = /[0-9](?=.*.{4})/gim;
