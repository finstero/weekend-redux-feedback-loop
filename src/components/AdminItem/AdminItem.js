import { useSelector } from 'react-redux';
import axios from 'axios';

// material ui
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminItem({getFeedback}) {

    // grabbing all feedback from database stored in allFeedback reducer
    const allFeedback = useSelector(store => store.allFeedback);

    // delete route for individual feedback delete
    const handleDelete = (id) => {
        console.log('delete', id);

        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
        .then(response => {
            // console.log('deleted feedback');
            // reload page/ re do get. passed using props.
            getFeedback();
        })
        .catch(err => {
            console.log('error in delete client', err);
        })
    }

    // displays all feedback properties from all feedback currently in db/reducer
    // and delete button to delete feedback from database
    return (
        <>
            {allFeedback.map((feedback, i) => (
                <TableRow key={i}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell>{feedback.date.substring(0, 10)}</TableCell>
                    <TableCell><IconButton onClick={handleDelete.bind(this, feedback.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton></TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default AdminItem;