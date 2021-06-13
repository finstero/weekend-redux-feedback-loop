import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

// component
import AdminItem from '../AdminItem/AdminItem';


// material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from 'axios';

function Admin() {

    const dispatch = useDispatch();

    // on page load grabs all feedback from database and dispatches to allFeedback reducer
    useEffect(() => {
        getFeedback();
    }, []);

    // get route for all feedback
    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
            .then(response => {

                // sends all data from db to allFeedback reducer
                dispatch({
                    type: 'ALL_FEEDBACK',
                    payload: response.data
                })
                console.log('array of feedback objects', response);
            })
            .catch(err => {
                console.log('error in get', err);
            })
    }

    // displays table with allFeedback data from db displayed by AdminItem component
    return (
        <>
            <h2>All Feedback</h2>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <AdminItem getFeedback={getFeedback} />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Admin;