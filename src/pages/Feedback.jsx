import React from 'react'
import { Container, TextField, Button, Typography } from '@mui/material'

function Feedback(){
    return (
        <Container maxWidth="sm" sx={{ marginTop: '20px' }}>
            <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom>
                Feedback
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
                    label="Feedback"
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
                    sx={{ marginTop: '16px' }}
                >
                Submit Feedback
                </Button>
            </form>
        </Container>
      )
    }
export default Feedback