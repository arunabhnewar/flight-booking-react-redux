import { combineReducers } from "redux";
import ticketDetailsReducer from "./ticketDetails/ticketDetailsReducer";
// import ticketInfoReducer from "./ticketInfo/ticketInfoReducer";

// Create RootReducer function use combine reducer function
const rootReducer = combineReducers({
    // ticketInfo: ticketInfoReducer,
    ticketDetails: ticketDetailsReducer,
})

export default rootReducer;