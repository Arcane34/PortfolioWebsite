import './style.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
});

const controls = new OrbitControls(camera, renderer.domElement);


renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setY(10);

renderer.render( scene, camera);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshStandardMaterial({color: 0xffff00});
const sphere = new THREE.Mesh(geometry,material);

scene.add(sphere);

const planetGeo = new THREE.SphereGeometry(2, 24, 24);
const planetMat = new THREE.MeshStandardMaterial({color: 0x0000ff});
const planet = new THREE.Mesh(planetGeo,planetMat);
var time = 0
planet.position.set(15,0,0);

scene.add(planet);

const planet1Geo = new THREE.SphereGeometry(3, 28, 28);
const planet1Mat = new THREE.MeshStandardMaterial({color: 0x00ff00});
const planet1 = new THREE.Mesh(planet1Geo,planet1Mat);
planet1.position.set(25,0,0);

scene.add(planet1);


const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add( ambientLight)


const gridHelper = new THREE.GridHelper(200,50);

scene.add( gridHelper)

function animate() {
  time += 1;
  requestAnimationFrame( animate);
  renderer.render( scene, camera);
  planet.position.x = 15*Math.cos(time/180*Math.PI);
  planet.position.z = 10*Math.sin(time/180*Math.PI);
  planet1.position.x = 25*Math.cos((time/4)/180*Math.PI);
  planet1.position.z = 30*Math.sin((time/4)/180*Math.PI);
}
  
animate()