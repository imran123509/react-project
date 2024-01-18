import React from 'react';
// import './uppersecion.css';
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import HotelRoom from '../src/room.jpg';
import Star from '../src/star2.svg';
import { CiLocationOn } from "react-icons/ci";

function uppersection(){
     return (
        <>
         <div style={{fontFamily:"sans-serif"}}>
        <div style={{backgroundImage:`url(${HotelRoom})`, height:"25rem", marginRight:"7rem", marginLeft:"7rem"}}>
           <div style={{display:"flex", justifyContent:"space-between", marginLeft:"20rem", marginRight:"18rem", marginTop:"2rem"}}>
            
            <div style={{backgroundColor:"red", color:"white", fontSize:"2rem"}}><span style={{alignItems:"center"}}>Premium Stays</span></div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{marginRight:"1rem", fontSize:"2rem"}}><FaRegHeart /></div>
              <div style={{fontSize:"2rem"}}><IoShareSocial /></div>
            </div>
           </div>
           </div>
           <div style={{marginRight:"7rem", marginLeft:"7rem",backgroundColor:"#B84A00", marginBottom:"10rem"}}>
           <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 2.5rem"}}>
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
            </div>
          </div>
           </div>
        </div>
        </>
     )
}

export default uppersection;