import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {

    return (
        <div>
            
            <style>
                {`
            body {
              background-image: url('/imgs/background.jpg');
              background-repeat: repeat;
              background-attachment: fixed;
            }
          `}
            </style>

            <Navbar />
            <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default PageLayout;
