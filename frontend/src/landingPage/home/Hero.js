import React from 'react';
import './style.css';
import './font.css'; 

function Hero() {
    return (  
        <>
            <div className='container  mt-4 p-5'>
                <div className='row col-md-12 col-sm-12  text-center mb-5'>
                    <img src='/media/images/homeHero.png' alt='Home Hero' className="mb-4" />
                    <h1 className="mt-5 statsFont">Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more </p>
                    <button  className="btn btn-primary  signUpButton mt-2 fs-10 " style={{width:"10%" , margin:"0 auto"}}>SignUp Now</button>

                </div>
            </div>
        </>
    );
}

export default Hero;    