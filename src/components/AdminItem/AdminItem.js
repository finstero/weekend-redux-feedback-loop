import { useSelector } from 'react-redux';

// material ui
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function AdminItem() {

  const allFeedback = useSelector(store => store.allFeedback);

    return (
        <>
            {allFeedback.map((feedback, i) => (
                <TableRow key={i}>
                    <TableCell>{feedback.feeling}</TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default AdminItem;