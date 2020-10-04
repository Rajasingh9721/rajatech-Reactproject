import React from "react";
import {NavLink} from "react-router-dom";
import web from "./images/1.png";
import Common from "./Common"
const Home = ()=>{
	return(
		<>
			<Common 
			name="Grow your Business with" 
			imgsrc={web} visit="/service" 
			btname="Get Started" />
		</>
	)
}
export default Home;


//1.9