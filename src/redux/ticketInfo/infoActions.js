import { CLASS_TYPE, DESTINATION_FROM, DESTINATION_TO, GUESTS, JOURNEY_DATE } from "./infoActionType";


// Destination from action create
export const destinationFromAction = (value) => {
    return {
        type: DESTINATION_FROM,
        payload: {
            destinationFrom: value,
        }
    }
};


// Destination to action create
export const destinationToAction = (value) => {
    return {
        type: DESTINATION_TO,
        payload: {
            destinationTo: value,
        }
    }
}



// Journey date to action create
export const journeyDateAction = (value) => {
    return {
        type: JOURNEY_DATE,
        payload: {
            date: value,
        }
    }
}


// GUESTS to action create
export const guestsAction = (value) => {
    return {
        type: GUESTS,
        payload: {
            guests: value,
        }
    }
}


// Class Type to action create
export const classTypeAction = (value) => {
    return {
        type: CLASS_TYPE,
        payload: {
            classType: value,
        }
    }
}