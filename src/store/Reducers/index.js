import { combineReducers } from "redux";
import AuthReducer from './Auth'
import ServiceReducer from './ServiceReducer'

const rootReducer = combineReducers({
    AuthReducer,
    ServiceReducer
});
export default rootReducer


