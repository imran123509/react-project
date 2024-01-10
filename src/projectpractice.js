import React from 'react';
import './practice.css';
function projectpractice(){
    return (
        <>
        <div className='miandiv'>
           <div className='mainnavbar'>
            <div ><img src="logo-3.png"></img></div>
            <div>List Your Hotel</div>
            <div>About Us</div>
            <div>Blogs</div>
            <div>Contact Us</div>
            <div>
                <button>fnjfj</button>
            </div>
           </div>
            <div>
           <div className='midcontent'>
            <div className='midcontent1'><h1>Book Hourly And Save Money!</h1></div>
            <div className='midcontent2'>Choose hotels from allmajor cities in India</div> 
           </div>

           <div className='middivpart2'>
            <div className='checkboxdiv'>
              <div className='midchoice'>
                <div>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">For Couples</label>
                   </div>
                   <div>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">For Group</label>
                   </div>
                   <div>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">For one</label>
                   </div>
                </div>
              </div>
           </div>
           </div>
        </div>
        </>
    )
}
export default projectpractice;