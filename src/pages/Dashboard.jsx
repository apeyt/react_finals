import helloImage from '../assets/media/hello.jpg';
import mega from '../assets/media/mega.png';
import contact from '../assets/media/cont.png';
import feedback from '../assets/media/feedback.png';
import {Link} from "react-router-dom";

import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Dashboard(){
    
  const [date, setDate] = useState(new Date());
    return (
        <>
        {/* taas na flex */}
        <body style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <div style={{display: 'flex', flexDirection: 'row', padding: 10, margin: 10, paddingBottom: 0}}>
                <div>
                    <Link to = "/about">
                            <img 
                                src={helloImage} alt="hello" 
                                style={{ width: 'auto', height: '300px', margin: '10px', borderRadius: '30px',}}/>
                    </Link>
                </div>
                <div style={{ width: '400px', height: '300px', margin: '10px', borderRadius: '30px',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Calendar
                        onChange={setDate}
                        value={date}
                    />
                </div>
            </div>
        {/* baba na flex */}
            <div style={{display: 'flex', flexDirection: 'row', padding: 10, margin: 10,  paddingTop: 0, gap: 40}}>
                <div> 
                    <Link to = "/announcements">
                        <img 
                            src={mega} alt="announcements" 
                            style={{ width: '300px', height: '300px', margin: '10px', borderRadius: '30px', backgroundColor: '#abadf8'}}/>
                    </Link>
                </div>
                <div> 
                    <Link to = "/feedback">
                        <img 
                            src={feedback} alt="feedback" 
                            style={{ width: '300px', height: '300px', margin: '10px', borderRadius: '30px', backgroundColor: '#abadf8'}}/>
                    </Link>
                </div>
                <div> 
                    <Link to = "/contact">
                        <img 
                            src={contact} alt="contact_us" 
                            style={{ width: '300px', height: '300px', margin: '10px', borderRadius: '30px', backgroundColor: '#abadf8'}}/>
                    </Link>
                </div>
            </div>
        </body>
        </>
    )
}

export default Dashboard