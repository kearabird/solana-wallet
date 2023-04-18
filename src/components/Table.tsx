import React from 'react';
import MUIDataTable from 'mui-datatables';
import { useQuery } from 'react-query';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// #C8A2C8

const getTrans = async () => {
  const { data } = await axios.get('/api/transactions.json');
  return data.data;
};


const TransactionList: React.FC = () => {
  let getMuiTheme = () => createTheme({
    components: {
      MUIDataTable: {
        styleOverrides:{
          root: {
            position:'absolute',
            top: "300px",
            left:"50px",
            right:"50px",
            bottom: "300px",
          }
        }
      },
      MUIDataTableBodyCell: {
        styleOverrides:{
          root: {
              backgroundColor: "#C8A2C8"
              
          }
        }
      },
      MuiTableCell: {
        styleOverrides:{
          root: {
              backgroundColor: "#C8A2C8",
          }
        }
      },
      MUIDataTableToolbar: {
        styleOverrides:{
          root: {
              backgroundColor: "#C8A2C8",
          }
        }
      },
    }
  })
  const { data } = useQuery('create', getTrans);
  return (
    <div style={{ padding: '50px', marginLeft: '250px' }}>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable 
          columns={[
            {
              name: 'sender',
              label: 'Sender',
            },
            {
              name: 'recipient',
              label: 'Recipient',
            },
            {
              name: "sol_sent",
              label: 'Sol Sent',

            },
            {
              name: 'blockhash',
              label: 'Blockhash',
            },
          ]}
          data={data}
          options={{
            filter: true,
            viewColumns: false,
            selectableRows: 'single',
            selectableRowsOnClick: true,
            elevation: 0,
            rowsPerPage: 10,
            responsive: 'simple',
            filterType: 'dropdown',
            
          }}
          title=""
        />
      </ThemeProvider>
    </div>
  );
};

export default TransactionList;