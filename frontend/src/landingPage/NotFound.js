import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <div className="container text-center mt-5 mb-5">
                <h1 className="display-4">404 - Page Not Found</h1>
                <p className="lead">The page you are looking for does not exist.</p>
                <p className="mt-4">
                    <Link to="/" className="btn btn-primary">Go to Home</Link>  
             </p>
            </div>       
        </>
      );
}

export default NotFound;