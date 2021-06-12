import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();

    // state for textfield input value
    const [value, setValue] = useState('');

    // onchange handler sets state of value to textfield input
    const handleChange = (event) => {
        setValue(event.target.value);
        // console.log('text input hopefully?', value);
    }

    // stores comments in feedback reducer as object property. moves to next page, review page
    const nextPage = (event) => {
        event.preventDefault();
        console.log('value in nextpage', value);
        dispatch({
            type: 'COMMENTS',
            payload: value
        })
        history.push('/review')
    }

    const goBack = () => {
        history.push('/support');
    }

    // displays textfield for comments input and button for done/move to next page
    return (
        <>
            <h2>Any comments?</h2>
            <form onSubmit={nextPage}>
                <TextField
                    variant="outlined"
                    onChange={handleChange}
                />
                 <Grid container justify="center">
                        <Grid item>
                            <Button onClick={goBack} variant="outlined">Back</Button>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="outlined">Done</Button>
                        </Grid>
                    </Grid>
            </form>
        </>
    )
}

export default Comments;