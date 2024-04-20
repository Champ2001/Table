import React, { useState, useEffect } from 'react';


import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const AssetAccordion = ({ assetClass, data }) => {
  const [open, setOpen] = useState(false);

  return (
    <TableContainer component={Paper}>
      <Table aria-label={`${assetClass} table`} className='text-red-950'>
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell>{assetClass}:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Asset Details
                  </Typography>
                  <Table size="small" aria-label="asset details">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name of the holding</TableCell>
                        <TableCell>Ticker</TableCell>
                        <TableCell>Average price</TableCell>
                        <TableCell>Market Price</TableCell>
                        <TableCell>Latest change percentage</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((holding, index) => (
                        <TableRow key={index}>
                          <TableCell>{holding.name}</TableCell>
                          <TableCell>{holding.ticker}</TableCell>
                          <TableCell>{holding.avg_price}</TableCell>
                          <TableCell>{holding.market_price}</TableCell>
                          <TableCell>{holding.latest_chg_pct}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetAccordion;