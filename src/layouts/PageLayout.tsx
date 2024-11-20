import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {

    return (
        <div className="d-flex flex-column vh-100">
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
            <main className="flex-grow-1 container my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
