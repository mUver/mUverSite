import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import UserReducer from 'reducers/user';
import JobsReducer from "reducers/jobs";
import ShowReducer from "reducers/show";
import ClassReducer from "reducers/class";
import NewJobReducer from "reducers/newJob";
import UpdateReducer from "reducers/update";
import StatusReducer from "reducers/status";

// Combine Reducers
var reducers = combineReducers({
  userReducer: UserReducer,
  jobsReducer: JobsReducer,
  showReducer: ShowReducer,
  classReducer: ClassReducer,
  newJobReducer: NewJobReducer,
  updateReducer: UpdateReducer,
  statusReducer: StatusReducer,
  // more...
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;
