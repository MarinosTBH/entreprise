
import axios from "axios";
import { contactConstants } from '../actions/constantes';

export const listerContacts = () => {
   return async dispatch => {
        dispatch({ type: contactConstants.GET_ALL_CONTACTS_REQUEST });

        try {
            const response = await axios.get('http://127.0.0.1:3000/contacts/lister');
           
            if (response.status === 200) {
                dispatch({
                    type: contactConstants.GET_ALL_CONTACTS_SUCCESS,
                    payload: { contacts: response.data }
                });
            } else {
                dispatch({
                    type: contactConstants.GET_ALL_CONTACTS_FAILURE,
                    payload: { error: "Unexpected status code: " + response.status }
                });
            }
        } catch (error) {
            dispatch({
                type: contactConstants.GET_ALL_CONTACTS_FAILURE,
                payload: { error: error.message }
            });
        }
    } 
}
