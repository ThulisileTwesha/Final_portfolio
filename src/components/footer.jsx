import React from 'react';
import './footer.css';

function footer() {

    return(
       
        <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Thulisile Twesha</p>
        </div>
      </footer>

    );
}

export default footer;