import { useSelector } from 'react-redux';

// material ui
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function AdminItem() {

// grabbing all feedback from database stored in allFeedback reducer
  const allFeedback = useSelector(store => store.allFeedback);

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
                    <TableCell></TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default AdminItem;