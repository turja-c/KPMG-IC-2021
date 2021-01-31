import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbo from '../Jumbo';
import Navbar from '../Navbar';
import Partnership from '../Partnership';
import About from '../About';
import Footer from '../Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Jumbo />
            <About />
            <Partnership />
            <Footer />
        </>
    )
}

export default Home;