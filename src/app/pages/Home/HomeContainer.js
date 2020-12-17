import SearchForm from './SearchForm';
import CardsList from './CardsList';
import Loader from '../../componets/Loader';
import usePeopleState from '../../hooks/usePeopleState';

const styles = {
    padding: '4em 2em',
    background: 'lightgrey',
    display: 'flex',
    flex: '1 1',
    flexDirection: 'column'
}

export default function HomeContainer() {
    const state = usePeopleState();

    return (
        <div style={styles}>
            <SearchForm />
            {
                !state.isLoading ?
                <CardsList people={state.people} /> :
                <Loader />
            }
        </div>
    )
}
