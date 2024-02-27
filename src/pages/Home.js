// Home.js

import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Assuming your Navbar component is in a separate file

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(/assets/background.png)`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        {/* Your home content goes here */}
        <h1>Welcome to My Website</h1>
        <p>This is the home page content.</p>

        {/* Add image centered horizontally and vertically with a little offset to the right */}
        <div style={{ display: 'inline-block', position: 'relative', left: '350px' }}>
          <img src="/assets/img-1.png" alt="Description of the image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
