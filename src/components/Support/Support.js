import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// material ui
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function Supported () {

    const history = useHistory();
    const dispatch = useDispatch();

    // state for radio button value
    const [value, setValue] = useState('4');

    // onchange handler to set state of value to radio button selected
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // stores radio button selection in reducer. moves to next page, review page
    const nextPage = (event) => {
        event.preventDefault();
        console.log('value in nextpage', value);
        dispatch({
            type: 'SUPPORT',
            payload: value
        })

        history.push('/review')
    }

    // displays radio button form with 1-6 options and button for submit/move to next page
    return (
        <>
            <h2>How well are you being supported?</h2>
            <form onSubmit={nextPage}>
                <FormControl>
                    <RadioGroup row aria-label="support" name="support" value={value} onChange={handleChange}>
                        <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="Help me (1)"
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
                            label="Totally supported (6)"
                            labelPlacement="top"
                        />
                    </RadioGroup>
                    <Button type="submit" variant="outlined">Next</Button>
                </FormControl>
            </form>
        </>
    )
}

export default Supported;