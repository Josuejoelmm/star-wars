import { ACTIONS } from './actions';

const initalState = {
    people: [],
    allCharacters: [],
    isLoading: false,
    searchQuery: '',
    errorFetchPeople: ''
}

const reducer = (state = initalState, action) => {
 switch (action.type) {
     case ACTIONS.GET_PEOPLE + '_START':
        return {
            ...state,
            isLoading: true
        }
     case ACTIONS.GET_PEOPLE + '_SUCCESS':
        return {
            ...state,
            people: action.payload.results,
            allCharacters: action.payload.results,
            isLoading: false
        }
     case ACTIONS.GET_PEOPLE + '_ERROR':
        return {
            ...state,
            errorFetchPeople: action.payload.message,
            isLoading: false
        }
     case ACTIONS.DELETE_CHARACTER:
        return {
            ...state,
            people: state.people.filter(character => character.name !== action.characterName)
        }
     case ACTIONS.FILTER_CHARACTER:
        return {
            ...state,
            people: state.people.filter(character => {
                return character.name.toLowerCase().includes(action.query.toLowerCase());
            })
        }
     case ACTIONS.CLEAR_CHARACTERS:
        return {
            ...state,
            people: state.allCharacters
        }
     default:
         return state;
 }
}

export default reducer;