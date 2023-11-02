import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import './home.css'
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Card className='card'>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to our Restaurant
          </Typography>
          <Typography variant="body2" color="text.secondary">
          "Join Us for an Unforgettable Dining Experience, Right at Your Fingertips"
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            Our Restaurant is known for:
            <ul className='list'>
              <li>High-quality food and research programs</li>
              <li>Experienced chef</li>
              <li>State-of-the-art facilities</li>
              <li>Engaging customer service</li>
            </ul>
          </Typography>
        </CardContent>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Facilities and Amenities
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Provide a detailed list of the facilities available, which could include:
            <ul className='list'>
<li>Event spaces</li>
<li>Meeting rooms</li>
<li>Gardens or outdoor areas</li>
<li>Sports or recreational facilities</li>
<li>Parking facilities</li>
<li>Wi-Fi availability</li>
<li>Restrooms</li>
</ul>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
              Explore our programs and find the one that's right for you.
            </Typography>
          </CardContent>
        </Card>

        <div className="card-divider"></div> {/* Add space between cards */}

        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Equipment and Technology
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our campus is equipped with state-of-the-art facilities, including modern classrooms, well-equipped labs, a library, sports facilities, and a student center.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            <ul className='list'>
           <li>Audio-visual equipment</li>
<li>Projectors and screens</li>
<li>Microphones and sound systems</li>
<li>High-speed internet access</li>
</ul>
              
            </Typography>
          </CardContent>
        </Card>

    
        
        <div className="card-divider"></div> {/* Add space between cards */}
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Events We Cater
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our campus is equipped with state-of-the-art facilities, including modern classrooms, well-equipped labs, a library, sports facilities, and a student center.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '16px' }}>
            <ul className='list'>
           <li> Weddings and Receptions</li>
<li>Corporate Meetings and Conferences</li>
<li>Social Gatherings</li>
<li>Birthday Parties</li>
<li>Anniversaries</li>
<li>Holiday Celebrations</li>
<li>Fundraisers and Galas</li>
<li>Outdoor Picnics and BBQs</li>
<li>And More!</li>
</ul>
<div className="card-divider"></div> {/* Add space between cards */}
              
            </Typography>
          </CardContent>
        </Card>

        
      </Card>
      <Footer />
    </div>
  );
}

export default Home