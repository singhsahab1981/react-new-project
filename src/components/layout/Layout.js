import React, { Fragment } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SEO from '../seo/SEO';


const Layout = (props) => (
    <Fragment>
        <SEO />
        <Header />
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </Fragment>
)


export default Layout;