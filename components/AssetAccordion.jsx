import React, { useState } from 'react';
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

  const totalPosts = data.length; // Calculate total number of posts

  return (
    <TableContainer component={Paper} elevation={open ? 3 : 0} sx={{ backgroundColor: 'rgba(173, 216, 230, 0.3)' }}>
      <Table aria-label={`${assetClass} table`} sx={{ minWidth: 650 }}>
        <TableHead sx={{ opacity: 0.7 }}>
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
            <TableCell sx={{ paddingLeft: 0 ,left:85,position:'absolute'}}>
              <Typography variant="subtitle1" color="primary">
                {assetClass} ({totalPosts}) 
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Table size="small" aria-label="asset details">
                    <TableHead>
                      <TableRow>
                        <TableCell><Typography variant="body2" className='header'>NAME OF HOLDING</Typography></TableCell>
                        <TableCell><Typography variant="body2" className='header'>TICKER</Typography></TableCell>
                        <TableCell><Typography variant="body2" className='header'>AVERAGE PRICE</Typography></TableCell>
                        <TableCell><Typography variant="body2" className='header'>MARKET PRICE</Typography></TableCell>
                        <TableCell><Typography variant="body2" className='header'>LATEST CHANGE PERCENTAGE</Typography></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((holding, index) => (
                        <TableRow key={index}>
                          <TableCell><Typography variant="body2">{holding.name}</Typography></TableCell>
                          <TableCell><Typography variant="body2">{holding.ticker}</Typography></TableCell>
                          <TableCell><Typography variant="body2">{holding.avg_price}</Typography></TableCell>
                          <TableCell><Typography variant="body2">{holding.market_price}</Typography></TableCell>
                          <TableCell><Typography variant="body2">{holding.latest_chg_pct}</Typography></TableCell>
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
