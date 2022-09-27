import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const TableView = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dataset, setDataset] = useState();

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/arfbramboll/259078f1a1ac6b79619cc49a3c120dea/raw/8a3b6c2a081b3e89b446d9d52678e6112f6f43dc/volcanoes.json')
            .then((data) => setDataset(data.data));
    }, [])

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
                key={VolcanoID}
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

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableCell align="right">V_ID</TableCell>
                        <TableCell align="right">V_Name</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Region&nbsp;</TableCell>
                        <TableCell align="right">Subregion&nbsp;</TableCell>
                        <TableCell align="right">Latitude&nbsp;</TableCell>
                        <TableCell align="right">Longitude&nbsp;</TableCell>
                        <TableCell align="right">PEI&nbsp;</TableCell>
                        <TableCell align="right">VEI_Holoce&nbsp;</TableCell>
                    </TableHead>
                    <TableBody>
                        {dataset?.features
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (<Showing row={row} />)
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={dataset?.features.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TableView