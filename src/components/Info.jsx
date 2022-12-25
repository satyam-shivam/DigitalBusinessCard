import React from "react";
import lauraSmith from "../assets/laurasmith.png"

export default function Info(){
    return (
        <div className="info">
            <img src={lauraSmith} 
                alt="profile picture" 
                className="profile-pic" />
            <h2 className="name">Laura Smith</h2>
            <p className="designation">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="connect">
                <a href="#" className="email">
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <span>Email</span>
                </a>
                <a href="#" className="linkedIn">
                    <span><i class="fa-brands fa-linkedin"></i></span>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}