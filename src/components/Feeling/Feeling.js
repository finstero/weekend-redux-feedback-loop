import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// material ui
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Feeling() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const nextPage = () => {
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
            <FormControl>
                <FormLabel component="legend">Mood</FormLabel>
                <RadioGroup row aria-label="feeling" name="mood" value={value} onChange={handleChange}>
                    <FormControlLabel value="1" control={<Radio color="primary" />} label="1" />
                    <FormControlLabel value="2" control={<Radio color="primary" />} label="2" />
                    <FormControlLabel value="3" control={<Radio color="primary" />} label="3" />
                    <FormControlLabel value="4" control={<Radio color="primary" />} label="4" />
                    <FormControlLabel value="5" control={<Radio color="primary" />} label="5" />
                    <FormControlLabel value="6" control={<Radio color="primary" />} label="6" />
                </RadioGroup>
                <Button onClick={nextPage} variant="outlined">Next</Button>
            </FormControl>
        </>
    )

}

export default Feeling;