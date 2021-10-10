import { appState } from "./appState"
import { findSuggestions, removeDuplicateValues, removeItemFromList } from './utilities'

const contentReducer = (initialState = appState, action) => {
    switch (action.type) {
        case 'SEARCH_SUGGESTIONS':
            //operation that return suggestions on change...
            return { ...initialState, newSuggestions: findSuggestions(action.payload, initialState.suggestions) };
        case 'ADD_SUGGESTIONS':
            //operation that return suggestions on change...
            return { ...initialState, suggestions: [...initialState.suggestions, action.payload] };
        case 'EMPTY_NEWSUGGESTIONS':
            return { ...initialState, newSuggestions: [] };
        case 'ADD_VALUE_TO_LIST':
            return { ...initialState, list: removeDuplicateValues(initialState.list, action.payload) };
        case 'REMOVE_ITEM_FROM_LIST':
            return { ...initialState, list: removeItemFromList(initialState.list, action.payload) };
        default:
            return initialState
    }
}

export default contentReducer

