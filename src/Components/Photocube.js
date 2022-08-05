import React, { useEffect, useRef } from "react"
import profilepic from '../static/images/profile.jpg';
import * as THREE from 'three';
import './photocube.scss';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

class ProfilePic extends React.Component {
    constructor(props) {
      super(props)
  
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
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
      )
      const texture=new THREE.TextureLoader().load(profilepic);
      const renderer = new THREE.WebGLRenderer({alpha:true});
      const geometry = new THREE.BoxGeometry(3, 3, 3)
      const material = new THREE.MeshBasicMaterial({ color: '#ffffff',side:THREE.DoubleSide,map:texture }); 
      const cube = new THREE.Mesh(geometry, material)
      camera.position.z = 4
      scene.add(cube)
      renderer.setClearColor(0xFF0000, 0);
      renderer.setSize(width, height)
  
      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      this.material = material
      this.cube = cube
  
      this.mount.appendChild(this.renderer.domElement)
      this.start()
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
   //   this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
  
      this.renderScene()
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  
    renderScene() {
      this.renderer.render(this.scene, this.camera)
    }
  
    render() {
        return(
            <div className="profile-pic" ref={(mount) => { this.mount = mount }} >
            
            </div>
    )
    }
  }
  







export default ProfilePic;