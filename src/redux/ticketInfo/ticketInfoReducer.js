import { CLASS_TYPE, DESTINATION_FROM, DESTINATION_TO, GUESTS, JOURNEY_DATE } from "./infoActionType";


// Initial State Declaration
const initialState = {
    from: '',
    to: '',
    date: '',
    guest: '',
    classType: '',
}

// Create reducer function
const ticketInfoReducer = (state = initialState, action) => {

    switch (action.type) {
        case DESTINATION_FROM:
            return {
                ...state,
                from: action.payload.destinationFrom,
            };

        case DESTINATION_TO:
            return {
                ...state,
                to: action.payload.destinationTo,
            };

        case JOURNEY_DATE:
            return {
                ...state,
                date: action.payload.date,
            };

        case GUESTS:
            return {
                ...state,
                guest: action.payload.guests,
            };

        case CLASS_TYPE:
            return {
                ...state,
                classType: action.payload.classType,
            };

        default:
            return state;
    }
}


export default ticketInfoReducer;