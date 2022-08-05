import React,{useEffect,useMemo, useRef,useState} from "react";
import { Link } from "react-router-dom";
import * as THREE from 'three';
import '../static/Home.css';
import Loading from "../Components/Loading";
import PrfoilePic from '../static/images/profile.jpg';
import './scss/index.scss';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import AnimatedLetters from '../Components/AnimatedLetters';
import ProfilePic from "../Components/Photocube";
const  Home=()=>{
    const refControl=useRef(null);
    const [letterClass, setLetterClass] = useState('text-animate-hover');      
    const nameArray = ['S','u', 'r', 'j', 'e', 'e', 't',' ','L','o','d','h','i'];
    const jobArray = [
      'F',
      'u',
      'l',
      'l',
      '-',
      'S',
      't',
      'a',
      'c',
      'k',
      'W',
      'e',
      'b',
      ' ',
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ];
    const [isLoading,setLoading]=useState(true);
  
    const   windowSize={width:window.innerWidth
        ,height:window.innerHeight-40};
    const mouse={x:0,y:0};

    //for rendering of the three 3d background of homepage
    useEffect(() => {

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
 
        renderer.setSize( window.innerWidth, window.innerHeight-40 );
       document.body.appendChild(renderer.domElement);
        

            var geometry = new THREE.BoxGeometry( 8,8, 8 );
            var material = new THREE.MeshBasicMaterial( { color: 0xff0000,wireframe:true } );
            var geometry2 = new THREE.BoxGeometry( 8,8,8 );
            var material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff,wireframe:true } );

        var cube = new THREE.Mesh( geometry, material );
        var cub2=new THREE.Mesh(geometry2,material2);
        
        scene.add( cube );
        scene.add(cub2);
        const controls=new OrbitControls(camera,renderer.domElement);
        controls.autoRotate=true;
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight-40 );
          }
      
          function calculatePosition(event){

            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          }
          
            function rotateTheCubes(){
              cube.rotation.x += 0.01;
              cube.rotation.y += 0.01;
              cub2.rotation.x-=0.01;
              cub2.rotation.y-=0.01;
            }
            function onPointerMove(event){
              event.preventDefault();
              calculatePosition(event);
//              console.log(mouse);
            }
            window.addEventListener("resize", onWindowResize, false);
            window.addEventListener("mousemove",onPointerMove);
  
        var animate = function () {
            requestAnimationFrame( animate );
          const {width,height}=window;
          //console.log(mouse);
          windowSize.width=width;
          windowSize.height=height;
          camera.rotateZ+=0.1;
          rotateTheCubes();
          
          renderer.render( scene, camera );
        };
          
        animate(); 
        setLoading(false);
        return () => document.body.removeChild( renderer.domElement);    
      },[]);


    


return (
<>{
isLoading?<Loading/>:<div ref={refControl} className="container home-page" >
<div className="text-zone" style={{width:"55%",height:"auto"}}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp; </span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </h1>
            <p className="intro-h3">I'M a web developer and programmer living in Punajb, India.I Make Web Application in Nodejs,PHP and Django</p>
          <h2>Full-Stack Developer | React Developer | Mern | PHP Developer | Django | THREE JS </h2>
          <Link to="contact" target="_self" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <ProfilePic/>
</div>

} </>   );
} 

export default Home;