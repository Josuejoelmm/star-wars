import Grid from '@material-ui/core/Grid';
import Card from '../Card';

export default function CardsList({ people }) {
    return (
        <Grid container spacing={3}>
            {people.map((singleCharacter, i) => (
                <Card 
                    key={singleCharacter.name} 
                    singleCharacter={singleCharacter}
                    index={i} 
                />
            ))}
        </Grid>
    )
}