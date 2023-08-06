import React from "react";

function About({image, about}){
    const placeholder = "https://via.placeholder.com/215"
    return <aside>
        <img src={image || placeholder} alt ="blog logo"/>
        <p>{about}</p>
    </aside>
}
export default About;