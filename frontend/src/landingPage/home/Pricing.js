import React from 'react';
import './style.css';
import './font.css';  // Assuming you have a CSS file for styling

function Pricing() {
    return (
        <>
            <div className='container mt-5' >
                <div className='row'>
                  
                   <div className='col-4 p-5 '>
                    <h1 className='mb-4 statsFont'>Unbeatable Pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency
                    in India. Flat fees and no hidden charges.</p>
                    <a href='./Hero.js' className='anchorTags '>See Pricing <i class="fa-solid fa-arrow-right"></i></a> 
                   </div>

                   <div className='col-2 '></div>

                   <div className='col-6 p-5'>
                        <div className='row text-center'>
                            <div className='col-6 p-4 border  '>
                                <h2>₹0</h2>
                                <p>Free equity delivery and
                                <br />
                                direct mutual funds</p>
                            </div>
                            <div className='col-6 p-4  border'>
                                <h2>₹20</h2>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                   </div>


                </div>
                
            </div>
        </>
      );
}                                                                      

export default Pricing;