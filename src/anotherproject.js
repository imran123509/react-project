import React from 'react';
import './anotherproject.css';
import Logo from '../src/logo.png'
import Room from '../src/room.jpg'
import Star from '../src/star.jpg'
import Map from '../src/map.jpg'
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiShareFill } from "react-icons/ri";
import { GiLoveMystery } from "react-icons/gi";
import Heart from "../src/heart.svg";
import Help from "../src/help.svg";
import Threestar from "../src/threestar.svg";
import Multistar from "../src/multistar.svg";
import Manimage from "../src/man.svg";
import OtherPartcode from "../src/otherpart"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import Imageone from "../src/image1.svg";
import ImageTwo from "../src/image2.svg";



function anotherproject() {
  return (

    <>
      <div className='body'>
        <div>
          <nav className='nav'>
            <ul className='ul'>
              <img src={Logo} height={50} width={120}></img>
              <li>List your hotel</li>
              <li>About us</li>
              <li>Blogs</li>
              <li>Contact us</li>
            </ul>
            <button className='navbutton'>Login or Create account</button>
          </nav>
        </div>
        <div style={{ backgroundColor: "rgb(247, 240, 230)" }}>
          <div className='matchdiv'><button className='matchp'>Best Match<FaAngleRight /></button><p className='matchp'>Hotels in Pune<FaAngleRight /></p><p>Hotel Golden Lawn</p></div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <div className='mainimgdiv'>
            <div style={{ margin: "1rem 2rem", width: "50%", position: "relative" }}>
              <img style={{ width: "100%" }} src={Room}></img>
              <p style={{ position: "absolute", top: "0%", left: "0", backgroundColor: "#ff1818", color: "white", padding: "10px 10px", fontWeight: "bold", fontSize: "20px", margin: "0" }}>Premium Stays</p>
            </div>
            <div style={{ width: "50%", marginTop: "1.1rem", marginBottom: "1rem", marginRight: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "49%" }}><img src={Room} height={290} width={440}></img></div>
                <div style={{ width: "49%" }}><img src={Room} height={290} width={440}></img></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <div style={{ width: "49%" }}><img src={Room} height={290} width={440}></img></div>
                <div style={{ width: "49%" }}><img src={Room} height={290} width={440}></img></div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 2.5rem",backgroundColor:"white" }}>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "28px", margin: "0" }}>Hotel Golden Lawn</p>
              <div><img src={Star} height={40} width={40}></img><img src={Star} height={40} width={40}></img><img src={Star} height={40} width={40}></img><img src={Star} height={40} width={40}></img></div>
              <div style={{ display: "flex", alignItems: "center" }}><p style={{ margin: "0", textAlign: "center", fontSize: "16px" }}><CiLocationOn style={{ marginRight: "8px", fontSize: "25px" }} />Sakinaka East, Mumbai...</p></div>
            </div>
            <div style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "60%" }}>
                <div className='ratingdiv'><div className='rating'>3.5</div>Very Good<p style={{ margin: "0 5px", color: "black" }}>( 8 Ratings )</p></div>
                <div style={{ textAlign: "center", color: "grey" }}><p>Only upto 1 hr prior to CHECKIn time</p></div>
              </div>
              <div style={{ display: "flex", justifyContent: "left", width: "40%", alignItems: "start" }}>
                <div style={{ marginRight: "2rem", backgroundColor: "whitesmoke", borderRadius: "30px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", padding: "8px 10px" }}><FaRegHeart className='wishlist' /></div>
                <div style={{ marginRight: "2rem", backgroundColor: "whitesmoke", borderRadius: "30px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", alignItems: "center", padding: "8px 10px" }}><RiShareFill style={{ fontSize: "30px", cursor: "pointer" }} /></div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "2rem", marginRight: "14rem" ,backgroundColor:"white"}}>
            <div><img style={{ marginLeft: "1rem" }} src={Heart}></img></div>
            <div><img src={Help}></img></div>
            <div style={{ fontSize: "30px", color: "#FF6600", marginTop: "1.2rem", fontFamily: "sans-serif", marginLeft: "2rem" }}>Free Cancellation</div>
            <div style={{ fontSize: "30px", color: "#787878", marginTop: "1.2rem", fontFamily: "sans-serif", marginLeft: "1.8rem" }}>Full Day</div>
            <div style={{ fontSize: "30px", color: "#787878", marginTop: "1.2rem", fontFamily: "sans-serif", marginLeft: "1.8rem" }}>₹ 25,350</div>
          </div>
          <div className='retingrelated'>
            <div style={{ width: "35%" }}>
              <div style={{ height:"50%",}}>
                <div style={{ backgroundColor: "white", width: "90%", height:"100%", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <div style={{ fontSize: "2rem", paddingTop: "1rem", marginLeft: "10px" }}>Location</div>
                  <div style={{ padding: "3rem 3rem 3rem 3rem" }}><img style={{ width: "400px", height: "210px", borderRadius: "5px" }} src={Map}></img></div>
                  <div style={{ textAlign: "center" }}><p>Click on the maps to see location</p></div>
                </div>

              </div>
              <div className='review' style={{ backgroundColor: "white", width: "90%", height: "50%", borderRadius: "10px", marginTop: "1.5rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                <div style={{ fontSize: "2rem", paddingTop: "1rem", marginLeft: "10px" }}>Reviews</div>
                <div style={{ display: "flex" }}>
                  <img src={Multistar}></img>
                  <div style={{ fontSize: "2.5rem" }}>4.2</div>
                  <div style={{ marginTop: "0.8rem", color: "gray" }}><p>(Overall Ratings based on 17 customer views)</p></div>
                </div>
                <div style={{ fontSize: "1.3rem", color: "gray", marginLeft: "10px" }}><p>Customer Reviews</p></div>

                <div>


                  <div style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", margin: "0.5rem 1rem" }}>
                    <div><img src={Manimage}></img>Caron</div>
                    <div style={{ display: "flex" }}>
                      <p>Great location, beautiful surrounding atmosphere, great staff. Most friendly and helpful......<button style={{ color: "#FF6600", cursor: "pointer", border: "none", background: "transparent", fontWeight: "bold" }}>more</button></p></div>
                  </div>
                </div>

              </div>
            </div>
            <div style={{ width: "80%", borderRadius: "7px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", fontWeight: "600" }}>

              <div style={{padding:"2rem 3rem"}}>
              <div style={{ display: "flex", justifyContent: "space-between", marginLeft: "1rem", marginRight: "1rem" }}>
                <div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", fontWeight:"500" }}>Check-In date</div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", backgroundColor: "#FFE1C3", marginTop: "1rem", color: "#FF6803", justifyItems: "center", width: "16rem", borderRadius: "10px", padding:"10px", textAlign:"center" }}>Wed, 09 Dec 2023</div>

                </div>
                <div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", fontWeight:"500" }}>Check-In Time</div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", backgroundColor: "#FFE1C3", marginTop: "12px", color: "#FF6803", justifyItems: "center", borderRadius: "10px", padding:"10px", textAlign:"center" }}>2:00 PM</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", fontWeight:"500" }}>Rooms</div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", backgroundColor: "white", marginTop: "12px", color: "#FF6803", justifyContent:"space-between", borderRadius: "10px", display: "flex" }}><CiCirclePlus />
                    <div style={{ color: "#4E4E4E", fontSize: "25px" }}>1</div> <CiCircleMinus /></div>

                </div>
                <div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", fontWeight:"500" }}>Adults</div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", backgroundColor: "white", marginTop: "12px", color: "#FF6803", justifyContent:"space-between", borderRadius: "10px", display: "flex" }}><CiCirclePlus /><div style={{ color: "#4E4E4E", fontSize: "25px" }}>1</div> <CiCircleMinus /></div>
                </div>
                <div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", fontWeight:"500" }}>Childrens</div>
                  <div style={{ fontSize: "1.8rem", fontFamily: "sans-serif", backgroundColor: "white", marginTop: "12px", color: "#FF6803", justifyContent:"space-between", borderRadius: "10px", display: "flex" }}><CiCirclePlus />
                    <div style={{ color: "#4E4E4E", fontSize: "25px" }}>1</div> <CiCircleMinus /></div>
                </div>

              </div>
              <div>
                <div style={{fontSize: "1.5rem", padding: "1rem 1rem", fontWeight:"500" }}>Select Your Slot</div>
              </div>
              <div style={{padding:"1rem 2.5rem"}}>
              <div>
                <div className='forRate' style={{fontSize: "1.5rem", color: "#000", border:"2px solid black", borderRadius: "10px", padding:"1rem 2rem", alignItems:"center", display:"flex"}}>
                  <input className='inputRadio' type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Rs. 1000.00/-</label><br></br>
                </div>
              </div>
              <div>
                <div className='forRate' style={{fontSize: "1.5rem", marginTop: "1rem", color: "#000", border:"2px solid black", borderRadius: "10px", padding:"1rem 2rem", alignItems:"center", display:"flex"  }}>
                  <input className='inputRadio' type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Rs. 1288.00/-</label><br></br>
                </div>
              </div>
              <div>
                <div className='forRate' style={{fontSize: "1.5rem", marginTop: "1rem", color: "#000", border:"2px solid black", borderRadius: "10px", padding:"1rem 2rem", alignItems:"center", display:"flex"  }}>
                  <input className='inputRadio' type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Rs. 1288.00/-</label><br></br>
                </div>
              </div>
              <div>
                <div className='forRate' style={{fontSize: "1.5rem", marginTop: "1rem", color: "#000", border:"2px solid black", borderRadius: "10px", padding:"1rem 2rem", alignItems:"center", display:"flex"  }}>
                  <input className='inputRadio' type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Rs. 1288.00/-</label><br></br>
                </div>
              </div>
              </div>

              <div style={{fontSize: "2rem", marginTop: "3.5rem", textAlign:"center" }}>Final Amount (Inclusive of all taxes) - ₹1288.00/-</div>
              <div style={{fontSize: "2rem", marginTop: "2rem", margin:"1rem 2.5rem" , backgroundColor: "#FF6803", padding: "1rem", borderRadius: "10px", textAlign:"center" }}><button style={{textAlign: "center", fontSize: "2rem", backgroundColor: "#FF6803", border: "none", color: "white", fontWeight: "bold" }}>Book Now</button></div>
            </div>
            </div>

          </div>
        </div>
        <OtherPartcode />
      </div>
    </>

  )
}
export default anotherproject;



