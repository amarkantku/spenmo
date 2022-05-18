import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AppThemeProvider from './contexts/ThemeContext/ThemeProvider';
import cardJson from './data/cards.json';
import { getId } from './utils/utils';

import App from './App';

describe('<App /> component', () => {
    const initialState = {
        cards: {
            cards: cardJson.map((card) => {
                card.id = getId();
                return card;
            }),
        },
    };
    let store;

    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
    });

    test('should render correctly', () => {
        const { container } = render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/cards/i)).toBeInTheDocument();
    });

    test('should display Add new card CTA', () => {
        render(
            <AppThemeProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppThemeProvider>
        );
        expect(screen.getByTestId('add-new-card')).toBeInTheDocument();
        expect(screen.getByText(/add new card/i)).toBeInTheDocument();
    });
});
