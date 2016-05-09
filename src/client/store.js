import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import UserReducer from 'reducers/user';
import JobsReducer from "reducers/jobs";

// Combine Reducers
var reducers = combineReducers({
  userReducer: UserReducer,
  jobsReducer: JobsReducer,
  // more...
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;
