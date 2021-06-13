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

function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();

    // state for radio button value
    const [value, setValue] = useState('4');

    // onchange handler sets state of value to radio button selected
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // stores radio button selection in feedback reducer as object property. moves to next page, support page
    const nextPage = (event) => {
        event.preventDefault();
        console.log('value in nextpage', value);
        dispatch({
            type: 'UNDERSTANDING',
            payload: value
        })
        history.push('/support')
    }

    // goes to previous page on back button click
    const goBack = () => {
        history.push('/feeling');
    }

    // displays radio button form with 1-6 options and button for submit/move to next page
    return(
        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={nextPage}>
                <FormControl>
                    <RadioGroup row aria-label="understanding" name="understanding" value={value} onChange={handleChange}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="Not at all (1)"
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
                            label="I could teach this (6)"
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

export default Understanding;