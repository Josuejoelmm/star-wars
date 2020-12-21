import axios from '../helper/axios';

export const ACTIONS = {
    GET_PEOPLE : 'GET_PEOPLE',
    DELETE_CHARACTER : 'DELETE_CHARACTER',
    FILTER_CHARACTER : 'FILTER_CHARACTER',
    CLEAR_CHARACTERS : 'CLEAR_CHARACTERS',
}

export const getPeople = () => {
    return { 
        type: ACTIONS.GET_PEOPLE, 
        payload: axios.get('/people').then(response => response.data) 
    }
};

export const deleteCharacter = (index) => (
    {
        type: ACTIONS.DELETE_CHARACTER,
        index
    }
)

export const filterCharacters = (query) => (
    {
        type: ACTIONS.FILTER_CHARACTER,
        query
    }
);

export const clearCharacters = () => ({ type: ACTIONS.CLEAR_CHARACTERS });