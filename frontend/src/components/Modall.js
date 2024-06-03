import React, { useContext } from 'react'
import { Modal, Box, Typography, Divider, TextField, Button, IconButton, Container } from '@mui/material'
import { IoClose } from 'react-icons/io5';
import gradeContext from '../context/gradeContext'

const Modall = () => {
    const context = useContext(gradeContext);
    const { open, setOpen, setClose, pencil1, pencil2, pencil3, pencil4, handlepencil } = context;
  return (
    <>
        <Container>
        <Modal
        open={open}
        onClose={()=>{setClose(true); setOpen(false);}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", alignItems:"center", justifyContent:"center"  }}
        >
        <Box sx={{ bgcolor:"white", borderRadius:2 }}>
            <Box sx={{ my:2, mx:2, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Marks
            </Typography>
            <IconButton color='inherit' onClick={()=>{setClose(true); setOpen(false);}}><IoClose size={30}/></IconButton>
            </Box>
            <Divider/>
            <Box sx={{ mt:5, mb: 2, mx:2, display: "flex", flexDirection: "column" }}>
            <TextField
                id="input0"
                label="ID (Read Only)"
                defaultValue={`${pencil1 + 1}`}
                InputProps={{
                    readOnly: true,
                }}
                sx={{ mb: 2 }}
            />
            <TextField
                id="input1"
                label="Obtained Marks"
                defaultValue={`${pencil2}`}
                sx={{ mb: 2 }}
                type='number'
            />
            <TextField
                id="input2"
                label="Total Marks"
                defaultValue={`${pencil3}`}
                sx={{ mb: 2 }}
                type='number'
            />
            <TextField
                id="input3"
                label="Average Marks"
                defaultValue={`${pencil4}`}
                sx={{ mb: 2 }}
                type='number'
            />
            </Box>
            <Divider/>
            <Box sx={{ display:"flex", alignItems: "center", justifyContent:"flex-end", my:2, mx:2 }}>
            <Button variant="contained" size='small' color='inherit' sx={{ mr:1 }} onClick={()=>{setClose(true); setOpen(false);}}>Close</Button>
            <Button variant="contained" size='small' onClick={()=>{ const a = pencil1+1; handlepencil(a ,document.getElementById("input1").value, document.getElementById("input2").value, document.getElementById("input3").value); setClose(true); setOpen(false); }}>Save</Button>
            </Box>
        </Box>
        </Modal>
        </Container>
    </>
    )
}

export default Modall