import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// material ui
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    // state for radio button value
    const [value, setValue] = useState('4');

    // onchange handler sets state of value to radio button selected
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // stores radio button selection in feedback reducer as object property. moves to next page, understanding page
    const nextPage = (event) => {
        event.preventDefault();
        console.log('value in nextpage', value);
        dispatch({
            type: 'FEELING',
            payload: value
        })
        history.push('/understanding');
    }

    const goBack = () => {
        history.push('/');
    }

    // displays radio button form with 1-6 options and button for submit/move to next page
    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={nextPage}>
                <FormControl>
                    <RadioGroup row aria-label="feeling" name="feeling" value={value} onChange={handleChange}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="Dismal (1)"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="2"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio color="primary" />}
                            label="3"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="4"
                            control={<Radio color="primary" />}
                            label="4"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="5"
                            control={<Radio color="primary" />}
                            label="5"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="6"
                            control={<Radio color="primary" />}
                            label="Resplendent (6)"
                            labelPlacement="top"
                        />
                    </RadioGroup>
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={goBack} variant="outlined">Back</Button>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="outlined">Next</Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>
        </>
    )

}

export default Feeling;