import { useSelector } from 'react-redux';

// material ui
import Button from '@material-ui/core/Button';

function Submission () {

    const feedback = useSelector(store => store.feedback);

    const handleSubmit = () => {
        console.log('feedback in submit', feedback);
    }

    return (
        <>
            <h2>Thank you!</h2>
            <h3>Feeling: </h3>
            <h3>Understanding: </h3>
            <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
        </>
    )
}

export default Submission;