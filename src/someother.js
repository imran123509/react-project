

import React from 'react';
import './someother.css';
import HotelRoom from '../src/hotellogo.svg';
import Squere from '../src/squere.svg'

function someother(){
    return (
        <>
          <div className='bigdiv'>
             <div style={{backgroundColor:"rgb(247, 240, 230)", borderStyle:"solid", borderWidth:"1px", width:"35%", marginLeft:'2rem', padding:"2rem"}}>
              <div style={{fontWeight:"500", fontSize:"25px", textAlign:'center'}}>3 ROOM TYPES</div>

              <div><h1 style={{textAlign:'center'}}>Delux King Room</h1></div>
             
              <div style={{textAlign:'center'}}><div style={{position:"absolute", top:"54%", left:"29%", zIndex:"1000", background:"rgba(255, 255, 255, 0.531)", padding:"10px 20px", fontWeight:"bold", borderRadius:"20px", cursor:"pointer"}}> Show All</div><div style={{position:"relative", width:"95%"}}><img style={{width:"100%"}} src={HotelRoom}></img></div></div>
                
                <div style={{display:"flex", textAlign:'center',marginLeft:"2rem"}}>
                <div><img style={{marginTop:"20px"}}src={Squere}></img><span style={{fontSize:"1.5rem", marginBottom:"10px"}}>280 sq.ft</span></div>
                <div style={{marginLeft:"13rem"}}><img style={{marginTop:"20px"}}src={Squere}></img><span style={{fontSize:"1.5rem", marginBottom:"10px"}}>King Bed</span></div>
                </div>
                <div style={{fontSize:"1.3rem", marginTop:"3rem", marginLeft:"1.5rem", fontWeight:"bold"}}>Amenities</div>
                <div style={{fontSize:"1.3rem", marginTop:"0.8rem", marginLeft:"1.5rem", fontWeight:"bold"}}>Popular with Guests</div>
                <div>
                    <ul>
                        <li>Heater</li>
                        <li>Mineral Water</li>
                        <li>Heater</li>
                        <li>AC</li>
                        <li>Housekeeping</li>
                        <li>In-room Dining</li>
                        <li>Wi-fi</li>
                        <li>Bathroom</li>
                    </ul>
                </div>

                <div style={{fontSize:"1.3rem", fontWeight:"bold", marginTop:"0.8rem", marginLeft:"1.5rem"}}>Popular with Guests</div>
                <div>
                    <ul style={{listStyle:'initial'}}>
                        <li>Telephone</li>
                        <li>Charging points</li>
                        <li>sofa</li>
                        <li>mini</li>
                        
                    </ul>
                </div>

                <div style={{display:"flex", justifyContent:"center"}}><button style={{border:"none", background:"none", fontWeight:"bold", fontSize:"1.5rem", cursor:"pointer"}}>More Details</button></div>
              

                
             
              
              
             </div>




             {/* this is the other part */}
             {/* <div style={{width:"65%",borderStyle:"solid", borderWidth:"1px"}}>
             <div className='otherpart'>
                
                <div style={{width:"50%", height:"100%"}}>
                <div style={{borderStyle:"solid", borderWidth:"1px", fontSize:"1.5rem", textAlign:"center", height:"5rem",backgroundColor:"#FFFDD0"}}>OPTIONS</div>
                  <div style={{borderStyle:"solid", borderWidth:"1px"}}>
                    <div style={{textAlign:"center"}}>
                    <h1>Room Only</h1>
                 
                 <ul>
                        <li>Free stay for the kid</li>
                        <li>No meals included</li>
                        <li>Free Late check-out</li>
                        <li>Non-Refundable</li>
                        
                    </ul>
                    </div>
                 
                 <div style={{borderStyle:"solid", borderWidth:"1px"}}>
                 
                <div><h1>Room Only</h1></div>
                 
                 <ul>
                        <li>Free stay for the kid</li>
                        <li>No meals included</li>
                        <li>Free Late check-out</li>
                        <li>Non-Refundable</li>
                        
                    </ul>
                    
                 </div>
                 <div style={{borderStyle:"solid", borderWidth:"1px"}}>
                <div><h1>Room Only</h1></div>
                 
                 <ul>
                        <li>Free stay for the kid</li>
                        <li>No meals included</li>
                        <li>Free Late check-out</li>
                        <li>Non-Refundable</li>
                        
                    </ul>

                   
                 
                 </div>
                </div>
                </div>



                <div>PRICE</div>
             </div>
             </div> */}

<div style={{border: "1px solid grey", borderRadius: "5px", width:"65%" }}>
                                
                                <div style={{display:"flex", width:"100%", borderBottom:"1px solid grey"}}>
                                <div style={{ background: "rgb(247, 240, 230)", padding: "1.5rem", textAlign: "center", fontSize: "25px", fontWeight: "bold", width: "50%", borderRight: "1px solid black", borderTopLeftRadius:"5px" }}>OPTIONS</div>
                                <div style={{ background: "rgb(247, 240, 230)", padding: "1.5rem", textAlign: "center", fontSize: "25px", fontWeight: "bold", width: "50%", borderTopRightRadius:"5px" }}>PRICE</div>
                                </div>
                                <div style={{display:"flex", width:"100%", borderBottom: "1px solid grey"}}>
                                <div style={{ padding: "2rem 3rem", width:"50%", borderRight:"1px solid black" }}><p style={{ fontSize: "23px", fontWeight: "bolder" }}>Room Only</p>
                                    <ul style={{ listStyle: "initial", fontSize: "17px" }}>
                                        <li>Free stay for the kid</li>
                                        <li>No meals included</li>
                                        <li>Free late check-out</li>
                                        <li>Non - Refundable</li>
                                    </ul>
                                </div>
                                <div style={{textAlign:"center", width:"50%", padding:"2rem 3rem"}}>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"1rem 0 1rem 0"}}>
                                    <div style={{fontSize:"18px", fontWeight:"bold", marginRight:"1rem"}}>Per Night</div>
                                    <div style={{ position: "relative" }}>
                                        <p style={{ fontSize: "22px", fontWeight: "bold", color: "darkgrey", padding: 0, margin: 0 }}> ₹ 26,377</p>
                                        <div className='cutprice'>
                                        </div>
                                    </div>
                                </div>
                                <div style={{fontSize:"35px", fontWeight:"bold"}}>₹ 10,500</div>
                                <div style={{marginBottom:"1rem"}}>+ ₹ 2,300 taxes & fees Per Night</div>
                                <div style={{display:"flex", justifyContent:"center", marginBottom:"9.5px"}}><div className='selectb'>Select</div></div>
                                </div>
                                </div>
                                <div style={{display:"flex", width:"100%", borderBottom: "1px solid grey"}}>
                                <div style={{ padding: "2rem 3rem", borderRight:"1px solid black", width:"50%"}}><p style={{ fontSize: "23px", fontWeight: "bolder" }}>Room with Breakfast</p>
                                    <ul style={{ listStyle: "initial", fontSize: "17px" }}>
                                        <li>Free stay for the kid</li>
                                        <li>No meals included</li>
                                        <li>Free late check-out</li>
                                        <li>Non - Refundable</li>
                                    </ul>
                                </div>
                                <div style={{textAlign:"center", width:"50%", padding:"2rem 3rem"}}>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"2rem 0 1rem 0"}}>
                                    <div style={{fontSize:"18px", fontWeight:"bold", marginRight:"1rem"}}>Per Night</div>
                                    <div style={{ position: "relative" }}>
                                        <p style={{ fontSize: "22px", fontWeight: "bold", color: "darkgrey", padding: 0, margin: 0 }}> ₹ 26,377</p>
                                        <div className='cutprice'>
                                        </div>
                                    </div>
                                </div>
                                <div style={{fontSize:"35px", fontWeight:"bold"}}>₹ 10,500</div>
                                <div style={{marginBottom:"1rem"}}>+ ₹ 2,300 taxes & fees Per Night</div>
                                <div style={{display:"flex", justifyContent:"center", marginBottom:"8.5px"}}><div className='selectb'>Select</div></div>
                                </div>
                                </div>
                                <div style={{display:"flex", width:"100%", height:"full"}}>
                                <div style={{ padding: "2rem 3rem", width:"50%", borderRight:"1px solid black" }}><p style={{ fontSize: "23px", fontWeight: "bolder" }}>Room with Breakfast + Lunch/Dinner</p>
                                    <ul style={{ listStyle: "initial", fontSize: "17px" }}>
                                        <li>Free stay for the kid</li>
                                        <li>No meals included</li>
                                        <li>Free late check-out</li>
                                        <li>Non - Refundable</li>
                                    </ul>
                                </div>
                                <div style={{textAlign:"center", width:"50%", padding:"2rem 3rem"}}>
                                <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"2rem 0 1rem 0"}}>
                                    <div style={{fontSize:"18px", fontWeight:"bold", marginRight:"1rem"}}>Per Night</div>
                                    <div style={{ position: "relative" }}>
                                        <p style={{ fontSize: "22px", fontWeight: "bold", color: "darkgrey", padding: 0, margin: 0 }}> ₹ 26,377</p>
                                        <div className='cutprice'>
                                        </div>
                                    </div>
                                </div>
                                <div style={{fontSize:"35px", fontWeight:"bold"}}>₹ 10,500</div>
                                <div style={{marginBottom:"1rem"}}>+ ₹ 2,300 taxes & fees Per Night</div>
                                <div style={{display:"flex", justifyContent:"center", marginBottom:"9.5px"}}><div className='selectb'>Select</div></div>
                                </div>
                                </div>
                        </div>
          </div>
        </>
    )
}

export default someother;

