import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// material ui
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [value, setValue] = useState('4');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const nextPage = (event) => {
        event.preventDefault();
        console.log('value in nextpage', value);
        dispatch({
            type: 'FEELING',
            payload: value
        })

        history.push('/understanding')
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={nextPage}>
                <FormControl>
                    <RadioGroup row required aria-label="feeling" name="feeling" value={value} onChange={handleChange}>
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
                    <Button type="submit" variant="outlined">Next</Button>
                </FormControl>
            </form>
        </>
    )

}

export default Feeling;