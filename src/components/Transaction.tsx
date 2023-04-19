import { Button } from '@mui/material';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import type { Keypair, TransactionSignature } from '@solana/web3.js';
import { PublicKey, Transaction, TransactionInstruction,  SystemProgram, LAMPORTS_PER_SOL,} from '@solana/web3.js';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import axios from 'axios';
import  TransactionModal  from './TransactionModal'
import {useQueryClient, useMutation} from 'react-query'
import LoadingModal from './LoadingModal';


const web3 = require("@solana/web3.js")
const querystring = require("querystring");

interface trans{
    from: PublicKey;
    to: PublicKey;
    amount: number;
    blockhash: string;
}

const createTrans = async (data: trans) => {
    let customConfig = {
        headers: {
            'content-type': 'application/json',
        }
    };
    const { data: response } = await axios.post('/api/transactions.json', data, customConfig);
    return response.data;
    
    };

export const SendTransaction = () => {
    const queryClient = useQueryClient()
    let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
    const { publicKey, sendTransaction, } = useWallet();
    const [openModal, setOpenModal] = React.useState(false);
    const [address, setAddress] = React.useState('');
    const [sol, setSol] = React.useState('');

    const { mutate, isLoading } = useMutation(createTrans, {
        onSuccess: data => {
           console.log(data);
           const message = "success"
           alert(message)
     },
       onError: () => {
            alert("there was an error")
     },
       onSettled: () => {
          queryClient.invalidateQueries('create')
     }
     });

    const handleClickOpen = () => {
    setOpenModal(true);
    };

    const handleClose = () => {
    setOpenModal(false);
    };
    const handleCloseLoading = () => {
        setLoading(false);
    };

    const handleCloseConfrim = () => {
        setConfirm(false);
    };

    const handleCloseCancel = () => {
        setCancel(false);
    };

    const [loading, setLoading] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    const [cancel, setCancel] = React.useState(false);


    const handleSubmit = useCallback(async () => {
        setOpenModal(false);
        setLoading(true);
        let signature: TransactionSignature | undefined = undefined;
        try {
            if (!publicKey) throw new Error('Wallet not connected!');
            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight },
            } = await connection.getLatestBlockhashAndContext();
            let toKey = new web3.PublicKey(address,)
            console.log("here1", address, toKey);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                  fromPubkey: publicKey,
                  toPubkey: toKey,
                  lamports: LAMPORTS_PER_SOL * parseFloat(sol),
                })
              );
            transaction.recentBlockhash = blockhash;
            console.log("here2", transaction);
            signature = await sendTransaction(transaction, connection);
            console.log("sent", transaction);

            await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
            setLoading(false);
            setConfirm(true);
            const transInfo = {from: publicKey, to: toKey, amount: parseFloat(sol), blockhash: blockhash }
            console.log( transInfo);
            //TODO; here
            mutate(transInfo);
        } catch (error: any) {
            setLoading(false);
            setCancel(true);
        }
    }, [publicKey, connection, sendTransaction]);

    const onClick = useCallback(async () => {
        setOpenModal(true);
    }, [publicKey, connection, sendTransaction]);

    return (
        <>
            <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
                Send Transaction (devnet)
            </Button>
            <TransactionModal open={openModal} setOpen={setOpenModal} address={address} setAddress={setAddress} sol={sol} setSol={setSol} handleClickOpen={handleClickOpen} handleClose={handleClose} handleSubmit={handleSubmit}/>
            <LoadingModal open={loading} setOpen={setLoading} handleClose={handleCloseLoading} state={"loading"}/>
            <LoadingModal open={confirm} setOpen={setConfirm} handleClose={handleCloseConfrim} state={"confirmed"}/>
            <LoadingModal open={cancel} setOpen={setCancel} handleClose={handleCloseCancel} state={"canceled"}/>
        </>
    );
};