import { applyMiddleware, 
        compose, 
        createStore, 
        combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productDetailsReducer, productListReducer } from '../reducers/productReducers'

const initialState = {}
const middlewares=[thunk]
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export default store;