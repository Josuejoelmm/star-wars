import Card from '../Card';

export default function CardsList({ people }) {
    return (
        <div>
            {people.map(singleCharacter => (<Card key={singleCharacter.name} singleCharacter={singleCharacter} />))}
        </div>
    )
}