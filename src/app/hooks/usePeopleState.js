import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../state/actions';

export default function usePeopleState() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    
    useEffect(() => {
        dispatch(getPeople());
    },[dispatch]);

    return state
}
