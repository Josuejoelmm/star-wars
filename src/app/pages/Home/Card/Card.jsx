import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteCharacter } from '../../../../state/actions';

const CardContainer = styled.div`
    border: 1px solid #000000;
    border-radius: 10px;
`;

export default function Card({ singleCharacter: { name, height, hair_color, skin_color, gender, mass }}) {
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteCharacter(name));
    }
    return (
        <CardContainer>
            <h4>Name: {name}</h4>
            <h5>weight: {mass}Kg</h5>
            <h5>Height: {height}cm</h5>
            <h5>Hair color: {hair_color}</h5>
            <h5>Skin color: {skin_color}</h5>
            <h5>Gender: {gender}</h5>
            <div>
                <button onClick={onDelete}>Delete</button>
            </div>
        </CardContainer>
    )
}