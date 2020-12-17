import { useDispatch } from 'react-redux';
import { deleteCharacter } from '../../../../state/actions';
import Grid from '@material-ui/core/Grid';
import CardWrapper from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginBottom: 12,
      padding: '6%'
    },
    noneMarginTop: {
        marginTop: 0
    }
  });

export default function Card({ singleCharacter: { name, height, hair_color, skin_color, gender, mass }}) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const onDelete = () => {
        dispatch(deleteCharacter(name));
    }

    return (
        <Grid item lg={3} sm={6} xs={12}>
            <CardWrapper className={classes.root}>
                <h4 className={classes.noneMarginTop}>Name: {name}</h4>
                <p>weight: {mass}Kg</p>
                <p>Height: {height}cm</p>
                <p>Hair color: {hair_color}</p>
                <p>Skin color: {skin_color}</p>
                <p>Gender: {gender}</p>
                <div>
                    <Button variant="contained" color="secondary" onClick={onDelete}>Delete</Button>
                </div>
            </CardWrapper>
        </Grid>
    )
}