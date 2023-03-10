import { BOOKING_TICKET, DELETE_TICKET } from "./ticketActionType";


// Booking Ticket action create 
export const bookingTicketAction = (value) => {
    console.log(value);
    return {
        type: BOOKING_TICKET,
        payload: value,
    }
};


// Delete Ticket action create 
export const deleteTicketAction = (id) => {
    return {
        type: DELETE_TICKET,
        payload: id,
    }
};