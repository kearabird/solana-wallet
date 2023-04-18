import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface TransactionModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
    sol: string;
    setSol: React.Dispatch<React.SetStateAction<string>>;
    handleClickOpen: () => void;
    handleClose: () => void
    handleSubmit: () => Promise<void>;
}

export default function TransactionModal(props: TransactionModalProps) {
    const {open, address, setAddress, sol, setSol, handleClickOpen, handleClose, handleSubmit, ...other} = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the SOL address you want to send to
          </DialogContentText>
          <TextField
            value={address}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAddress(event.target.value);
              }}
            autoFocus
            margin="dense"
            id="address"
            label="Wallet Address"
            type="text"
            fullWidth
            variant="standard"
            required
            color="secondary"
          />
          <DialogContentText>
            Enter the amount of SOL to send
          </DialogContentText>
          <TextField
            autoFocus
            value={sol}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSol(event.target.value);
              }}
            margin="dense"
            id="name"
            label="sol"
            type="number"
            fullWidth
            variant="standard"
            required
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}