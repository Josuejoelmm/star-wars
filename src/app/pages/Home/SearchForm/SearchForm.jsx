import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCharacters, clearCharacters } from '../../../../state/actions';

export default function SearchForm() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setQuery(e.target.value)
    }
    
    const onFilter = () => {
        dispatch(filterCharacters(query));
    }
    
    const onClear = () => {
        dispatch(clearCharacters());
    }

    return (
        <div>
            <input onChange={onInputChange} type="text"/>
            <button onClick={onFilter}>Search</button>
            <button onClick={onClear}>See all</button>
        </div>
    )
}
