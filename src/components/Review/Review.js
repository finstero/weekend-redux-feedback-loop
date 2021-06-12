import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// material ui
import Button from '@material-ui/core/Button';

function Review () {

    const history = useHistory();

    const feedback = useSelector(store => store.feedback);

    const handleSubmit = () => {
        console.log('feedback in submit', feedback);
        history.push('/thankyou');
        
    }

    return (
        <>
            <h2>Thank you!</h2>
            <h3>Feeling: {feedback.feeling}</h3>
            <h3>Understanding: {feedback.understanding}</h3>
            <h3>Supported: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
        </>
    )
}

export default Review;