import { ACTIONS } from './actions';

const initalState = {
    people: [],
    allCharacters: [],
    isLoading: false,
    errorFetchPeople: '',
    notCharacterFound: ''
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
         const index = action.index;
        return {
            ...state,
            people: [...state.people.slice(0, index), ...state.people.slice(index + 1)]
        }
     case ACTIONS.FILTER_CHARACTER:
        const filteredCharacters = state.allCharacters.filter(character => {
            return character.name.toLowerCase().includes(action.query.toLowerCase());
        });
        
        if (filteredCharacters.length === 0) {
            return {
                ...state,
                notCharacterFound: 'no character was found',
                people: filteredCharacters
            }
        }
        return {
            ...state,
            people: filteredCharacters,
            notCharacterFound: ''
        }
     case ACTIONS.CLEAR_CHARACTERS:
        return {
            ...state,
            people: state.allCharacters,
            notCharacterFound: ''
        }
     default:
         return state;
 }
}

export default reducer;