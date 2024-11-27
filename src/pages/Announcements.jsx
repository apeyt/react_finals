import React from 'react';
import {Container, Typography, Card, CardContent, Button, Box} from '@mui/material';

const announcements = [
    {
        id: 3,
        title: "Midnight Snack Event",
        description: "We're excited to share that we will be hosting a Midnight Snack Event on February 29, 2025 at 10:00 AM! Bring your favorite chichirya to share and enjoy a delicious time together. We can't wait to see what everyone brings!",
        date: "December 1, 2024"
    },
    {
        id: 2,
        title: "Maintenance Downtime",
        description: "Please be advised that maintenance work will be conducted on December 32, 2024, from 12:00 AM to 12:01 AM. During this time, we, your masters, may be unavailable. We appreciate your understanding.",
        date: "November 32, 2024"
    },
    {
        id: 1,
        title: "Holiday Announcement",
        description: "Dear Team, As we approach the festive season, we want to wish everyone a Merry Christmas and a Happy New Year! Our office will be closed whenever you want. Enjoy the holidays with your loved ones!",
        date: "November 31, 2024"
    }
]

function Announcements(){
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '16px'}}>
            <Typography variant="h4" textAlign='center' padding='10px 20px 0px 5px'fontWeight="800" color='primary' gutterBottom>
                Announcements
            </Typography>
            <Container>
                {announcements.map((announcement) => (
                    <Box sx={{gap: 50, p: 3, m: 'auto', width: '80%'}}>
                        <Card>
                            <CardContent>
                            <Typography color='primary'>
                                <h2>{announcement.title}</h2>
                            </Typography>
                            <Typography color="secondary"gutterBottom>
                                <h5>{announcement.date}</h5><br />
                            </Typography>
                            <Typography gutterBottom>
                                <h4>{announcement.description}</h4><br />
                            </Typography>
                            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
                                <Button size="small" color="primary">View</Button>
                            </div>
                            </CardContent>
                        </Card>
                    </Box>
                ))}

            </Container>
            </div>
        </>
    )
}

export default Announcements