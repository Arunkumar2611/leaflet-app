import React, { useEffect } from "react";
import { connect } from "react-redux";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fetchData } from "../action/actionVolcano";

const Temp = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        const { dispatch } = props;
        dispatch(fetchData());
    }, []);

    const { loading, items, error } = props;
    console.log(items);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const Showing = (row) => {
        const { properties } = row?.row;
        const { VolcanoID, V_Name, Country, Region, Subregion, Latitude, Longitude, PEI, VEI_Holoce } = properties;

        return (
            <TableRow
                hover role="checkbox" tabIndex={-1} key={row.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell align="right">{VolcanoID}</TableCell>
                <TableCell align="right">{V_Name}</TableCell>
                <TableCell align="right">{Country}</TableCell>
                <TableCell align="right">{Region}</TableCell>
                <TableCell align="right">{Subregion}</TableCell>
                <TableCell align="right">{Latitude}</TableCell>
                <TableCell align="right">{Longitude}</TableCell>
                <TableCell align="right">{PEI}</TableCell>
                <TableCell align="right">{VEI_Holoce}</TableCell>
            </TableRow>
        )
    }

    if (loading) return <span>loading...</span>;
    if (error) return <span>error!</span>;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow >
                            <TableCell align="right">V_ID</TableCell>
                            <TableCell align="right">V_Name</TableCell>
                            <TableCell align="right">Country</TableCell>
                            <TableCell align="right">Region&nbsp;</TableCell>
                            <TableCell align="right">Subregion&nbsp;</TableCell>
                            <TableCell align="right">Latitude&nbsp;</TableCell>
                            <TableCell align="right">Longitude&nbsp;</TableCell>
                            <TableCell align="right">PEI&nbsp;</TableCell>
                            <TableCell align="right">VEI_Holoce&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (<Showing key={row.properties.VolcanoID} row={row} />)
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

const mapStateToProps = (state) => {
    const { volcano } = state;
    console.log(volcano)
    return {
        loading: volcano.loading,
        items: volcano.data,
        error: volcano.error
    };
};

export default connect(mapStateToProps)(Temp);
