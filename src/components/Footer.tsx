import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='footer d-flex flex-wrap justify-content-between align-items-center py-3 px-5 border-top bg-light'>
      <div className='col-md-4 d-flex align-items-center'>
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <img src="/yambo-logo_Full_Gray.svg" alt="Yambo Logo" height={32} />
        </a>
        <span className='text-muted'>
          © 2024 Yambo Alcobendas
        </span>
      </div>
      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className="ms-3">
          <a className="text-muted" href="https://github.com/cabrasky/web-yambo-remaster/">
            <img src="/github-logo_Full_Gray.svg" className="bi" width={24} height={24} alt='Github Logo'/>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://www.instagram.com/yambo_jambo/">
            <img src="/instagram-logo_Full_Gray.svg" className="bi" width={24} height={24} alt='Instagram Logo'/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
