import {useEffect} from 'react';
import {useDispatch} from 'react-redux';


// material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from 'axios';

function Admin() {


    useEffect( () => {
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then(response => {
            dispatchEvent({
                type: 'ALL_FEEDBACK',
                payload: response.data
            })
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

                </TableBody>
            </Table>
        </>
    )
}

export default Admin;