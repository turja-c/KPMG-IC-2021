import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Footer.css';

export default function App() {
  const divStyle2 = {
    marginTop: '20px',
    paddingTop: '15px',
    paddingBottom: '15px'
    
  };

  return (
    <>
     <hr></hr>
     <div className="footer" style={divStyle2} className="container">
        <div className="text-center">
          <h7>Copyright © 2021 Academix {"\n"}</h7>
        </div>
     </div>
    </>
  );
}