import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Loading from "../Components/Loading";
import '../static/technology.css';
import profilepic from '../static/images/profile.jpg';
class Technologies extends React.Component{
    constructor(props) { 
        super(props)
    
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
        this.updateScreenSize=this.updateScreenSize.bind(this);
        this.cubeRotattionAndCollission=this.cubeRotattionAndCollission.bind(this);
      }
    
      componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          1,
          1000
          );
          const renderer = new THREE.WebGLRenderer({alpha:true});

let cubes=[]
let left=[]
let leftY=[]
for(let i=0;i<technologies.length;++i){

const texture=new THREE.TextureLoader
().load(technologies[i]);

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff',map:texture}); 
  const cube = new THREE.Mesh(geometry, material);
  if(i<(technologies.length/2)){
    cube.position.x=-Math.random()/1.5+i
    cube.position.y=-Math.random()/2+i
    left.push(false);
    leftY.push(true);
    }else{
    cube.position.x=-Math.random()/1.5+i;
    cube.position.y=-Math.random()/2+i;
    left.push(true);
    leftY.push(false);
  }
  cubes.push(cube);
}

cubes.forEach((cube)=>{
scene.add(cube);
})

camera.position.z = 4;
        
        renderer.setClearColor(0xFF0000, 0);
        renderer.setSize(width, height)
        new OrbitControls(camera,renderer.domElement);
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.cubes=cubes;
        this.left=left;
        this.leftY=leftY;
        window.addEventListener('resize',this.updateScreenSize,false);
        this.mount.appendChild(this.renderer.domElement)
        this.start()
      }
      updateScreenSize(){
          window.cancelAnimationFrame(this.frameId);
          let width=window.innerWidth;
          let height=width.innerHeight-40;
          this.camera.aspect=window.innerWidth/window.innerHeight;
          this.camera.updateProjectionMatrix();
        this.renderer.setSize(width,height);
        this.timeoutid=setTimeout(this.animate,4000);
        this.start();
      }

      
      cubeRotattionAndCollission(){
        let i=0;
        this.cubes.forEach((cube)=>{
            if(this.left[i]){
             cube.position.x-=(Math.random()/100)
            }
            else{
             cube.position.x+=(Math.random()/90);
            }
            if(cube.position.x>(window.innerWidth/250)){
                this.left[i]=true;
            }else if(cube.position.x<=(-window.innerWidth/250))
            {
                this.left[i]=false;
            }
//            console.log(this.left);     

            i++;
 
        })
         i=0;
        this.cubes.forEach((cube)=>{
            if(this.leftY[i]){
             cube.position.y-=(Math.random()/85)
            }
            else{
             cube.position.y+=(Math.random()/80);
            }
            if(cube.position.y>(window.innerHeight/350)){
                this.leftY[i]=true;
            }else if(cube.position.y<=((-window.innerHeight/350)))
            {
                this.leftY[i]=false;
            }

            i++;
 
        })
      }

      componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
      }
    
      start() {
          this.animate();
      }
    
      stop() {
        cancelAnimationFrame(this.frameId);
      }
    
      animate() {

    this.cubes.forEach((cube)=>{
        cube.rotation.y+=0.02;
        cube.rotation.x+=0.02;
        cube.rotation.z+=0.01;
    })
        this.cubeRotattionAndCollission();
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
      }
    
      renderScene() {
        this.renderer.render(this.scene, this.camera)
      }
    
      render() {
          return(
              <div className="canvas" ref={(mount) => { this.mount = mount }} style={{height:(window.innerHeight-40)+"px"}} >
              
              </div>
      )
      }
}

const technologies=[
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/c++.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/python.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/html.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/java.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/js.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/github.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/vs.png',
    'https://surjeetlodhirajput.github.io/myportfolio/media/pics/logos/dj.png',
    'https://blog.logrocket.com/wp-content/uploads/2019/07/ES-modules-ESM-node.png',
    'https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg',
    'https://blog.logrocket.com/wp-content/uploads/2020/10/laravel.png'
]
export default Technologies;