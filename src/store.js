import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './utils/redux/reducers/index.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk)
    ));
export default store