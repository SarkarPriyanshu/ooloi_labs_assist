export const searchSuggestion = (value) => {
    return {
        type: 'SEARCH_SUGGESTIONS',
        payload: value
    }
}


export const addSuggestion = (value) => {
    return {
        type: 'ADD_SUGGESTIONS',
        payload: value
    }
}

export const emptyNewSuggestion = () => {
    return {
        type: 'EMPTY_NEWSUGGESTIONS',
    }
}

export const addValueToList = (value) => {
    return {
        type: 'ADD_VALUE_TO_LIST',
        payload: value
    }
}

export const removeItemFromList = (index) => {
    return {
        type: 'REMOVE_ITEM_FROM_LIST',
        payload: index
    }
}