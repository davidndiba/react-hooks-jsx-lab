import React from "react";
import { name, city } from "../data/data.js";

let user ={name ,city}
console.log(name,city)


function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{color:"firebrick"}}>
      Liza is a Web Developer from New York
      </h1>
    </div>
  )
}

export default Home;
