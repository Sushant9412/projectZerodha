import React from 'react';
import './style.css';
import './font.css'; 

function Award() {
    return ( 
        <>
           <div className='container   mt-2'>
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <img src='media\images\largestBroker.svg' alt='award'/>
 
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12  p-5'>
                     <h1 className='mt-5 statsFont'>Largest stock broker in India</h1>
                     <p className='mt-3'> 2+ million Zerodha clients contribute to over 15% of all retail
                         order volumes in India daily by trading and investing in:
                     </p>
                     <div className='row mt-4'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <ul>
                               <li>Futures and Options</li>
                               <li>Commodity derivatives</li>
                               <li>Currency derivatives</li>
                            </ul>
                        </div>
                         <div className='col-lg-6 col-md-12 col-sm-12'>
                            <ul>
                               <li>Stocks & IPOs</li>
                               <li>Direct mutual funds</li>
                               <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                     </div>
                     <img src='media\images\pressLogos.png' alt='award' className='mt-5' style={{width:"80%"}}/>
                </div>
              </div>
           </div>

        </>
     );
}

export default Award ;
