import { useSelector } from 'react-redux';

// material ui
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function AdminItem() {

    // grabbing all feedback from database stored in allFeedback reducer
    const allFeedback = useSelector(store => store.allFeedback);

    const handleDelete = () => {
        console.log('delete');
        axios.delete({
            method: 'DELETE',
            url: '/feedback'
        })
        .then(response => {
            console.log('deleted feedback');
            // delete from reducer and/or reload? do i need to reload? probs
        })
        .catch(err => {
            console.log('error in delete ', err);
        })
    }


    // displays all feedback properties from all feedback currently in db/reducer
    return (
        <>
            {allFeedback.map((feedback, i) => (
                <TableRow key={i}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell>{feedback.date}</TableCell>
                    <TableCell><IconButton onClick={handleDelete} aria-label="delete">
                        <DeleteIcon />
                    </IconButton></TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default AdminItem;