import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// material ui
import Button from '@material-ui/core/Button';

function Review () {

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
            console.log('error in post', err);
        })  
    }

    // displays all previously input feedback. stored in reducers only until submit button clicked
    return (
        <>
            <h2>Review Your Feedback</h2>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Support: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
            <h2>Thank you!</h2>
        </>
    )
}

export default Review;