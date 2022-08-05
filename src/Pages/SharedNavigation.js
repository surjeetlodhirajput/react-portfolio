import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import '../static/SharedNavigation.css';

const SharedNavigation=()=>{
    const [isMobile,setIsMobile]=useState(window.innerWidth<971?true:false);
    const handleIsMobile=()=>{
        if(window.innerWidth>971){
            document.querySelectorAll('.navbar-link').forEach(e=>{
                e.style="top:0;"
            });
        }
        if(window.innerWidth<971){
            setIsMobile(true);

        }
        else{
            setIsMobile(false);
        }
    }

const checkChekedState=(e)=>{
 if(e.target.checked){
let arr= document.querySelector('.btn-check').querySelectorAll('span');
arr[0].style="opacity:0";
arr[2].style=" transform: rotate(42deg)translate(-5px,-7px);";
arr[1].style=" transform: rotate(-44deg)";
document.querySelectorAll('.navbar-link').forEach(element => {
element.style="top:10px;";
});


        }
        else{
            let arr= document.querySelector('.btn-check').querySelectorAll('span');
arr[0].style="opacity:1";
arr[2].style="transform:rotateZ(0deg)";
arr[1].style="transform:rotateZ(0deg)";
document.querySelectorAll('.navbar-link').forEach(element => {
    element.style="top:-1000px;";
});
        }
    }

const changeCheckButtonPosition=()=>{
    if(document.querySelector('.btn-check')){
       document.querySelector('.btn-check').style="margin-left:"+(window.innerWidth-70)+"px";
    

}
}

useEffect(()=>{
        window.addEventListener("resize",handleIsMobile);
        window.addEventListener('resize',changeCheckButtonPosition);
},[]);


    return(
        <div className="nav-div">
            {
            isMobile&&<div className="btn-check" style={{marginLeft:(window.innerWidth-70)+'px'}}>
                <span></span>
                <span><input type="checkbox" id="chk-box1-1" onChange={checkChekedState}  /></span>
                <span ></span>

            </div>
            }
            
            <NavLink to="/" className={({isActive})=>isActive?"active navbar-link":"navbar-link hometag"}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive?"active navbar-link":"navbar-link"}>About</NavLink>
            <NavLink to="/technology" className={({isActive})=>isActive?"active navbar-link":"navbar-link"}>Technologies</NavLink>
            <NavLink to="/project" className={({isActive})=>isActive?"active navbar-link":"navbar-link"}>Projects</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive?"active navbar-link":"navbar-link"} >Contact</NavLink>

        </div>
    );
}
export default SharedNavigation;