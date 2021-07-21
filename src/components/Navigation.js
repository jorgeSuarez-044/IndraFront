import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">IndraTest</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to='/Contact'>HOLA</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>




    );
}

export { Navigation };
