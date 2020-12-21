import { useState, createRef, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterCharacters, clearCharacters } from '../../../../state/actions';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MaterialStyles from './materialStyles';
import './styles.css';

export default function SearchForm() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const classes = MaterialStyles();
    const searchButton = useRef(null);
    const inputText = useRef(null);

    const onInputChange = (e) => {
        setQuery(e.target.value);
        if (!e.target.value) {
            dispatch(clearCharacters());
        }
    }
    
    const onFilter = () => {
        dispatch(filterCharacters(query));
    }
    
    const onKeyUpSearchInput = (e) => {
        if (e.keyCode === 13) {
            const button = searchButton.current;
            button.click();
        }
    }
    
    useEffect(() => {
        inputText.current.click();
    }, [])

    return (
        <div className={"Navbar__container " + classes.wrapper}>
            <div className={"input_brk_width mb__sp " + classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    ref={inputText}
                    onKeyUp={onKeyUpSearchInput}
                    onChange={onInputChange}
                    placeholder="Character name…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Button 
                ref={searchButton}
                className="Margin__Right mb__sp" 
                variant="contained" color="primary" 
                onClick={onFilter}>
                    Search
            </Button>
        </div>
    )
}

        
