import {Button, Modal, Box} from '@mui/material'
import { Children } from 'react'

export default function CustomModal({open, handleOpen, buttonText, handleClose, children}){
    return(
        <>
            <Button 
                variant='contained'
                color='success'
                sx={{marginBottom: 2}}
                onClick={handleOpen}
            >
                {buttonText}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: 10,
                        gap: 5,
                        width: '50%',
                        bgcolor: 'background.paper',
                        width: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                        p: 3,   
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    {children}
                </Box>
            </Modal>
        </>
    )
}