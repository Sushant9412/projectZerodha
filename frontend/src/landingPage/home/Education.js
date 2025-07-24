import React from 'react';
import './style.css'; 
import './font.css'; // Assuming you have a CSS file for styling

function Education() {
    return (
    <>
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-4'>
                 <img src='media/images/education.svg' alt='education'  style={{width:"70%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h3 className='mb-3 statsFont mt-3' >Free and open market education</h3>
                      <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                      </p>
                      <a href='./Hero.js' className='anchorTags '>Vercity <i class="fa-solid fa-arrow-right"></i></a> 
                      < p className='mt-5'>
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                      </p>
                      <a href='./Hero.js' className='anchorTags '>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a> 

                </div>
             </div>
        </div> 
    </>
     );
}

export default Education;