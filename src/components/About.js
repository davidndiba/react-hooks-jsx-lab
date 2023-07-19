import React from "react";
import {image} from "../data/data"

console.log(image);

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>For Any Inquiries Don't Shy Off In Asking For Assistance </p>
      <img src="{image}" alt="I made this"></img>

    </div>
  )
}

export default About;
