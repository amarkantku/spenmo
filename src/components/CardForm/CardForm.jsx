import React, { useState } from 'react';
import Button from '../Button/Button';
import {
    CardFormWrapper,
    FormGroup,
    Label,
    Input,
    Section,
} from './CardForm.styled';

const CardForm = (props) => {
    const [cardInfo, setCardInfo] = useState(props.cardDetails);
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCardInfo((prevState) => {
            if (/(month|year)/i.test(name)) {
                return {
                    ...prevState,
                    expiry: {
                        ...prevState.expiry,
                        [name]: value,
                    },
                };
            } else {
                return {
                    ...prevState,
                    [name]: value,
                };
            }
        });
    };

    const handleSubmit = () => {
        props.onSubmit(cardInfo);
    };

    return (
        <CardFormWrapper data-tesid={'card-form-wrapper'}>
            <FormGroup>
                <Label data-tesid={'card-holder-name'} htmlFor="name">
                    Card holder name
                </Label>
                <Input
                    data-tesid={'card-holder-name-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="name"
                    value={cardInfo?.cardHolderName}
                    name={'cardHolderName'}
                />
            </FormGroup>
            <FormGroup>
                <Label
                    data-tesid={'card-last-four-digit'}
                    htmlFor="last-four-digit"
                >
                    Card last four digit
                </Label>
                <Input
                    data-tesid={'card-last-four-digit-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="last-four-digit"
                    value={cardInfo?.cardLastFourDigit}
                    name={'cardLastFourDigit'}
                />
            </FormGroup>
            <FormGroup>
                <Label data-tesid={'card-color'} htmlFor="color">
                    Color
                </Label>
                <Input
                    data-tesid={'card-color-input'}
                    onChange={handleOnChange}
                    type={'color'}
                    id="color"
                    value={cardInfo?.color}
                    name={'color'}
                />
            </FormGroup>
            <FormGroup>
                <Label data-tesid={'card-expiry'} htmlFor="expiry">
                    Expiry
                </Label>
                <Section id="expiry">
                    <Input
                        data-tesid={'card-expiry-month'}
                        onChange={handleOnChange}
                        placeholder={'MM'}
                        type={'text'}
                        value={cardInfo?.expiry?.month}
                        name={'month'}
                    />
                    <Input
                        data-tesid={'card-expiry-year'}
                        onChange={handleOnChange}
                        placeholder={'YYYY'}
                        type={'text'}
                        value={cardInfo?.expiry?.year}
                        name={'year'}
                    />
                </Section>
            </FormGroup>
            <FormGroup>
                <Button onClick={() => handleSubmit()}>Save</Button>
            </FormGroup>
        </CardFormWrapper>
    );
};

export default CardForm;
