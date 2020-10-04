import React from "react";
import {NavLink} from "react-router-dom";
import web from "./images/2.png";
import Common from "./Common.js"
const About = ()=>{
	return(
		<>
			<Common 
			name="Welcome to About Page" 
			imgsrc={web} visit="/contact" 
			btname="Contact Now" />
		</>
	)
}
export default About;