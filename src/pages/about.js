import React from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';

const About = () => {
        AOS.init();
return (
    <Layout>
        <SEO 
        title='About Us Page Title'
        description='About Us page description is this'
        keywords='About, about New, About Main'
        />
        <h1 className='aos-init' data-aos="fade-in" data-aos-delay="400">About Page</h1>
    </Layout>       
)
}
export default About;