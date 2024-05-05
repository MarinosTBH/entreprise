
import { contactConstants } from '../actions/constantes';
const initialState = {
    contacts: [],
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case contactConstants.GET_ALL_CONTACTS_REQUEST:
            return {
             ...state
             
            };
        case contactConstants.GET_ALL_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.payload.contacts
            };
        case contactConstants.GET_ALL_CONTACTS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
            default:
                console.log('default action', action.type);
                return state;
    }
}




