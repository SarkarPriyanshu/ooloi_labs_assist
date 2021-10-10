import React from "react"
import { useDispatch } from 'react-redux'
import { removeItemFromList, addValueToList } from '../redux/actions/searchSuggestion.Action'


export const ListItem = (props) => {
    const dispatch = useDispatch();
    return <>
        <li onClick={() => dispatch(addValueToList(props.value))} className='list_item'>{props.value}</li>
    </>
}



export const AddedListItems = (props) => {
    const dispatch = useDispatch();
    return <>
        <span className='list_item added_items'>{props.value} <button onClick={() => dispatch(removeItemFromList(props.index))} className='remove_btn'>X</button></span>
    </>
}