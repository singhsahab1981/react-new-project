import { Link } from 'gatsby';
import React, { Fragment } from 'react';

const Header = () => {
    return(
        <Fragment>            
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>React New Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainMenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/about/'>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;