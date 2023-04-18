import React from 'react';
import MUIDataTable from 'mui-datatables';
import { useQuery } from 'react-query';
import axios from 'axios';

const getTrans = async () => {
  const { data } = await axios.get('/api/transactions.json');
  return data.data;
};
const TransactionList: React.FC = () => {
  const { data } = useQuery('create', getTrans);
  return (
    <div style={{ padding: '50px', marginLeft: '250px' }}>
      
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
    </div>
  );
};

export default TransactionList;