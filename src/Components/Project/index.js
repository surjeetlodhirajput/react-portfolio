import React from "react";
import './index.css';
import '../AnimatedLetters/index.scss';
const Project=({project})=>{
    return(
        <div className="card">
        <div className="card__content">
            <div className="card__front" style={{background:"url("+project.imageLink+")"}}>
                <h3 className="card__title">{project.name}</h3>
                <p className="card__subtitle">{project.technologyUsed}</p>
            </div>
            <div className="card__back">
                <p className="card__body">{project.desc.split("").map((c,key)=>(<span key={key} className="text-animate-hover">{c}</span>))}</p>
            </div>
        </div>
    </div>

    );
}

export default Project;