import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className="container border-bottom ">
            <div className="row text-center mt-5 mb-5">
                <h1 className='mt-4 text-muted' style={{fontSize:"3rem"}} >Zerodha Products</h1>
                <p className='mt-2 fs-5' >
                    Sleek, modern, and intuitive trading platforms
                </p>    
                <p >Check out our <Link to='/' style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></Link></p>
            </div>
            </div>
  
     );
}

export default Hero;