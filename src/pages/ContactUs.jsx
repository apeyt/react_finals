import React from 'react';
import {Container, TextField, Button, Typography} from '@mui/material';

function ContactUs(){
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom> 
            Contact Us
            </Typography>
            <form>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{marginTop: '16px'}}
            >
                Send Message
            </Button>
            </form>
        </Container>
    )
}
        

export default ContactUs