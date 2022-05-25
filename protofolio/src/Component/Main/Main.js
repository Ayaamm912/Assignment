import { Component } from "react";
import img from './personal.jpg'
import './Main.css'

function Main(){
    return(
     <section class="first">
         <div class="text">
             <p>Hello,</p>
             <h1> I'm Aya</h1>
             <p>Computer Science and Information Technology Student <br></br>
             <br></br>
             <ul>
                 <li><strong>Full Name:</strong> Aya Muhammad Mubarak</li>
                 <li><strong>Age: </strong> 22 Years</li>
                 <li><strong>City: </strong> Ismailia</li>
             </ul>
             </p>
             </div>
         <div class="img">
            <img src={img}></img>
             </div>
     </section>

    )
}

export default Main;