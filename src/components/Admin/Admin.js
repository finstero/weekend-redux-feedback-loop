import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AdminItem from '../AdminItem/AdminItem';


// material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from 'axios';

function Admin() {

    const dispatch = useDispatch();
    // const allFeedback = useSelector(store => store.allFeedback);

    useEffect( () => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then(response => {
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

    return (
        <>
            <h2>All Feedback</h2>
            <Table aria="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <AdminItem />
                    {/* {allFeedback.map((feedback, i) => (
                        <TableRow key={i}>
                            <TableCell>{feedback.feeling}</TableCell>
                        </TableRow>
                    ))} */}
                </TableBody>
            </Table>
        </>
    )
}

export default Admin;