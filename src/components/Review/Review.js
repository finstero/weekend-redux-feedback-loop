import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


// material ui
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Review() {

    const history = useHistory();

    // grabs feedback object from reducer that is storing all responses
    const feedback = useSelector(store => store.feedback);

    // send all feedback data to server (post route)
    const handleSubmit = () => {
        console.log('feedback in submit', feedback);

        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
            .then(response => {
                console.log('response in post', response);
                history.push('/thankyou');
            })
            .catch(err => {
                swal("Oh no!", "Please go back and make sure you have rated your feeling, understanding, and support levels.", "error");
                console.log('error in post', err);
            })
    }

    const goBack = () => {
        history.push('/comments');
    }

    // displays all previously input feedback. stored in reducers only until submit button clicked
    return (
        <>
            <h2>Review Your Feedback</h2>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <Grid container justify="center">
                <Grid item>
                    <Button onClick={goBack} variant="outlined">Back</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Review;