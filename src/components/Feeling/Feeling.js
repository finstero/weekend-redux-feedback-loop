import { useHistory } from 'react-router-dom';
import { useState } from 'react';

// material ui
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Feeling() {

    const history = useHistory();

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const nextPage = () => {
        history.push('/understanding')
    }
    
    return (
        <>
            <h2>How are you feeling today?</h2>
            <FormControl>
                <FormLabel component="legend">Mood</FormLabel>
                <RadioGroup aria-label="feeling" name="mood" value={value} onChange={handleChange}>
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                </RadioGroup>
                <Button onClick={nextPage} variant="outlined">Next</Button>
            </FormControl>
        </>
    )

}

export default Feeling;