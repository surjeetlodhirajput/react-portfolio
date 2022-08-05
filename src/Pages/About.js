import React,{useEffect} from "react";
import '../static/about.css';
import Reactangle from '../static/images/Rectangle3.png';
import myProfile from '../static/images/rmme.png';
import leftArrow from '../static/images/Vector2.png';
import RightArrow from '../static/images/Vector3.png';
import HK from '../static/images/hackerrank.png';

const  About=()=>{
    useEffect(()=>{
        const nodeList=document.querySelectorAll('.info-arrow');
  let c=e=>{
         nodeList.forEach((node)=>{
            console.log(node.clientHeight,e.clientX);
             });
        };
let id=      window.addEventListener('scroll',e=>{
        nodeList.forEach((node)=>{
           //console.log((node.getBoundingClientRect().top+node.getBoundingClientRect().height),window.scrollY,window.innerHeight);
            if((node.getBoundingClientRect().top+node.getBoundingClientRect().height
            
            )<=window.innerHeight){
            node.style="margin-left:0px;margin-right:0;";
              
            }
            });
       });
       return window.removeEventListener('scroll',id);
    },[]);
    return (
        <>
    <div className="about-top-flex">
        <div className="left-about-top">
        Hello, My name is Surjeet. i am specialized in full-stack web development. I am currently leaving in india . I am a dependable and adaptable person who is great at time management and
        problem solving skills.I am a Goal oriented Person . I believe to focus more  on process than result because good result always created by good process. " Problem Solving is not just solving it but how you approach it " is what i learned through my experience till now while Learning Coding. Coding is a field which provide you ample opportunities for building your own approach for problem solving as i build mine. Coding and building new projects are one of mine hobby. I like to code in c++ but i can also code in Java , PHP,python and javascript.
        </div>
        <div className="right-about-top">
        <img id="imagebackground" src={Reactangle} alt="imagebackground" />
        <img id="myprofile" src={myProfile} alt="myprofile" />
        </div>
        <div className="ceartificates">
        <h2>Achievements and Ceartifications</h2>
        <div className="left-arrow info-arrow">
            <img src={leftArrow} alt="left-arrow" className="left-arrow-main"/>
            <img src={HK} alt="hackerrank" className="left-arrow-hk"/>
            <h3 className="mkls">React.js (Basic) Ceartification</h3>
            
        </div>
        <div className="right-arrow info-arrow">
    <img src={RightArrow} alt="right-arrow" />
    <img src={HK} alt="hackerrank" className="right-arrow-hk"/>
    <h3 className="rkls">CSS Ceartification</h3>
        </div>
        <div className="left-arrow info-arrow">
        <img src={leftArrow} alt="left-arrow" className="left-arrow-main"/>
            <img src={HK} alt="hackerrank" className="left-arrow-hk"/>
            <h3 className="mkls" >SQL Ceartification</h3>
        </div>
        <div className="right-arrow info-arrow">
        <img src={RightArrow} alt="right-arrow" />
    <img src={HK} alt="hackerrank" className="right-arrow-hk"/>
    <h3 className="rkls">Web with Node.js</h3>
        </div>
        </div>
    </div>
    </>
    );
}

export default About;