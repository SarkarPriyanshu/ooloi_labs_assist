export const findSuggestions = (value, suggestionsArray) => {
    let newSuggestions = [];
    if (value.length) {
        newSuggestions = suggestionsArray.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    }
    return newSuggestions
}

export const removeDuplicateValues = (list, value) => {
    let newArray = [];
    newArray = [...new Set([...list, value])]
    return newArray
}


export const removeItemFromList = (list, _index) => {
    let newList = list.filter((item, index) => index !== _index)
    return newList
}