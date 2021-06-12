import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Home() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/feeling')
    }

    return (
        <>
            <h2>Ready?</h2>
            <Button onClick={nextPage} variant="outlined">Start</Button>
        </>
    )
}

export default Home;