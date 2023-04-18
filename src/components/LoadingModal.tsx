import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';


export interface LoadingModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: () => void
    state: string;
}

export default function LoadingModal(props: LoadingModalProps) {
    const {open, handleClose, state, ...other} = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            {state === "loading" && <CircularProgress color="secondary"/>}
            {state === "confirmed" && (
                <>
                    <DialogContentText>
                        Transaction Sent!
                    </DialogContentText>
                    <CheckCircleIcon color='success'/>
                </>
            )}
            {state === "canceled" && (
                <>
                    <DialogContentText>
                        Transaction Failed, try again
                    </DialogContentText>
                    <ErrorIcon color='error'/>
                </>
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}