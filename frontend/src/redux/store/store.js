import { applyMiddleware, 
        compose, 
        createStore, 
        combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from '../reducers/cartReducers'
import { productDetailsReducer, productListReducer } from '../reducers/productReducers'
import { userSigninReducer } from '../reducers/userReducer'

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 
  },
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
  }
}
const middlewares=[thunk]

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
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