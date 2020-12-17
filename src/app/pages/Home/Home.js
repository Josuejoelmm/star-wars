import SearchForm from './SearchForm';
import CardsList from './CardsList';
import Loader from '../../componets/Loader';
import styled from 'styled-components';
import usePeopleState from '../../hooks/usePeopleState';

const HomeContainer = styled.section`
    padding: 4em 2em;
    background: lightgrey;
`;

export default function Home() {
    const state = usePeopleState();

    return (
        <HomeContainer>
            <SearchForm />
            {
                !state.isLoading ?
                <CardsList people={state.people} /> :
                <Loader />
            }
        </HomeContainer>
    )
}
