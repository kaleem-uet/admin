import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import StudentReducer from './store/reducer/Students';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  students:StudentReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
