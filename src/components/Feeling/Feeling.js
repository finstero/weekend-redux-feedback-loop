import {useHistory} from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Feeling () {

    const history = useHistory();

    const nextPage = () => {
        history.push('/understanding')
    }


    return(
        <>
            <h2>How are you feeling today?</h2>
            <Button onClick={nextPage} variant="outlined">Next</Button>
        </>
    )
}

export default Feeling;