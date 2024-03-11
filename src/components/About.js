import React from "react";


function About( blogData) {
    return (
        <aside>
            <img src={blogData.image ? blogData.image : "https://via.placeholder.com/215" } alt='blog logo'></img>
            <p>{blogData.about}</p>
        </aside>
    )
}

export default About;