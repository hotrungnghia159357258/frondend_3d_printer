//import { Component } from '@angular/core';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import * as THREE from "three";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  // handleFileInput(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     const contents = e.target.result;

  //     const loader = new STLLoader();
  //     const geometry = loader.parse(contents);
  //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  //     const mesh = new THREE.Mesh(geometry, material);

  //     this.renderModel(mesh);
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  // renderModel(mesh: THREE.Mesh) {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.getElementById('canvas-container')?.appendChild(renderer.domElement);

  //   scene.add(mesh);

  //   camera.position.z = 5;

  //   function animate() {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   }

  //   animate();
  // }
  ngOnInit():void
  {
    const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))
scene.background=new THREE.Color(0xFFFFCC);
    //scene.add(new THREE.AxesHelper(5))
const light = new THREE.SpotLight()
light.position.set(20, 20, 20)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 3

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const envTexture = new THREE.CubeTextureLoader().load([
    'img/px_50.png',
    'img/nx_50.png',
    'img/py_50.png',
    'img/ny_50.png',
    'img/pz_50.png',
    'img/nz_50.png'
])
envTexture.mapping = THREE.CubeReflectionMapping

const material = new THREE.MeshPhysicalMaterial({
    color: 0xb2ffc8,
    envMap: envTexture,
    metalness: 0.25,
    roughness: 0.1,
    opacity: 1.0,
    transparent: true,
    transmission: 0.99,
    clearcoat: 1.0,
    clearcoatRoughness: 0.25
})

const loader = new STLLoader()
loader.load(
    '/assets/stl/Mummy Bear Final.stl',
    function (geometry) {
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)





function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()

    
}

function render() {
    renderer.render(scene, camera)
}

animate()

  }

  
}


