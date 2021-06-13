import { useHistory } from 'react-router-dom';

// material ui
import Button from '@material-ui/core/Button';

function Home() {

    const history = useHistory();

    // moves user to next page of survey on start button click
    const nextPage = () => {
        history.push('/feeling')
    }

    // displays quick survey description and start button
    return (
        <>
            <h2>Ready?</h2>
            <p>This survey will ask how you are feeling, how well you are understanding the material,
             how well supported you feel, and if you have any additional comments. Please respond by choosing a number that best matches your experience TODAY.
             The higher the number, the more positive the response.</p>
            <Button onClick={nextPage} variant="outlined">Start</Button>
        </>
    )
}

export default Home;