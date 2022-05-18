import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware({});
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
        applyMiddleware(sagaMiddleware, createLogger())
    );
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore();
