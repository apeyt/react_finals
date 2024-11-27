import React from 'react';
import {Container, Typography, Paper} from '@mui/material';

function AboutUs(){
    return (
        <Container maxWidth="md" style={{padding: 5, margin: 'auto', marginTop: '25px'}} textAlign='center'>
            <Paper elevation={3} style={{padding: 10,}}>
                <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom>
                    About Us
                </Typography>
                <Typography textAlign='center'>
                    Welcome to our website! This is our website where we can access sites on web. <br></br>Our team is composed of experienced professionals who are passionate about what they do.
                </Typography><br></br>
                <Typography variant="h5" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom>
                    Our Mission
                </Typography>
                <Typography textAlign='center'>
                    To deliver innovative solutions that enhance the quality of life for our customers while fostering sustainability and community engagement.
                </Typography><br></br>
                <Typography variant="h5" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom>
                    Our Vision
                </Typography>
                <Typography textAlign='center'>
                    To be a global leader in our industry, recognized for our commitment to excellence, innovation, and positive social impact.
                </Typography>
            </Paper>
        </Container>
    )
}

export default AboutUs;