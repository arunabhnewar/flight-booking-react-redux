import { BOOKING_TICKET, DELETE_TICKET } from "./ticketActionType";

// Initial State Declaration
const initialState = [];

// Create reducer function
const ticketDetailsReducer = (state = initialState, action) => {
    const newState = structuredClone(state);


    switch (action.type) {
        case BOOKING_TICKET:
            newState.push(action.payload);
            return newState;

        case DELETE_TICKET:
            const index = newState.findIndex(ticket => ticket.id === action.payload);
            newState.splice(index, 1);
            return newState;

        default:
            return state;
    }

}

export default ticketDetailsReducer;