import React, { useEffect } from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faYoutube,faGithub,faLinkedin,faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faShare} from '@fortawesome/free-solid-svg-icons';
function Links({props}){
    async function shareWithOthers(){
       const data={
            title:"Surjeet Portfolio",
            text:"Personal Portfolio Website!!",
            url:document.URL
        }
        if(navigator.canShare(data)){
            navigator.share(data);
        }else{
            console.log("There is some error while sharing");
        }
    }
useEffect(()=>{

},[]);
return (
<div className="contact-links">
    <ul>
{
    props.map((val,i)=><li key={i}> <button className="btn-bx" onClick={e=>{window.open(val[0])}}><FontAwesomeIcon   icon={brands[val[1]]} className="bx" /><div className="bg"></div></button></li>)
}
<li key="100"> <button className="btn-bx" onClick={(e)=>{
shareWithOthers();
}} ><FontAwesomeIcon icon={faShare} className="bx" /><div className="bg"></div></button></li>
</ul>
</div>
);
}
const brands={
    "i":faInstagram,
    "y":faYoutube,
    "g":faGithub,
    "l":faLinkedin
}
export default Links;