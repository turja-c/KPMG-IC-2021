import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionQuiz from '../QuestionQuiz';
import Navbar from '../Navbar';
// import Footer from '../Footer';


function QuestionPage() {
    return (
        <>
            <Navbar />
            <QuestionQuiz />
            {/* <Footer /> */}
        </>
    )
}

export default QuestionPage;