import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


// material ui
import Button from '@material-ui/core/Button';



function ThankYou () {

    const history = useHistory();

    const returnHome = () => {
        history.push('/');
    }

    return(
        <>
            <h2>Thank you! Your feedback has been submitted.</h2>
            <Button onClick={returnHome} variant="outlined">Leave New Feedback</Button>
        </>
    )
}

export default ThankYou;