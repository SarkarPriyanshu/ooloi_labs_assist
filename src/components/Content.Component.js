import React, { useState } from "react"
import { ListItem, AddedListItems } from "./ListItem.Component";
import { useSelector, useDispatch } from 'react-redux'
import { searchSuggestion, addSuggestion, emptyNewSuggestion, addValueToList } from '../redux/actions/searchSuggestion.Action'


function Content() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const { list, newSuggestions } = useSelector(state => state.appState)

    //helper functions
    const handleChange = (e) => {
        dispatch(searchSuggestion(e.target.value))
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newSuggestions.length) {
            dispatch(addSuggestion(searchTerm))
        }
        dispatch(addValueToList(searchTerm))
        setSearchTerm('')
        dispatch(emptyNewSuggestion())
    }

    return (
        <div className="content">
            <header className="content_header">
                <h3>TAGS </h3>
                <small>(optional)</small>
            </header>
            <main className='content_main'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input value={searchTerm} type="search" onChange={(e) => handleChange(e)} placeholder="Start typing and we will make suggestions?" />
                </form>
                <ul className="content_main_suggestion">

                    {
                        newSuggestions && newSuggestions.length ? <>
                            {newSuggestions.map((item, index) => <ListItem value={item} index={index} />)}
                        </> : <></>
                    }
                </ul>
            </main>
            <ul className='added_list_items'>
                {list && list.map((item, index) => {
                    return <AddedListItems key={index} value={item} index={index} />
                })}
            </ul>
        </div>
    )
}


export default Content
