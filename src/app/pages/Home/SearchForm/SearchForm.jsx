import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCharacters, clearCharacters } from '../../../../state/actions';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        marginBottom: '20px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    }
  }));

export default function SearchForm() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

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
        <div className={"Navbar__container " + classes.wrapper}>
            <div className={"input_brk_width mb__sp " + classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
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
              className="Margin__Right mb__sp" 
              variant="contained" color="primary" 
              onClick={onFilter}>
                Search
            </Button>
            <Button variant="contained" onClick={onClear}>See all</Button>
        </div>
    )
}

        
