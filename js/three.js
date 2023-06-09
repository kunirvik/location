import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

import {OBJLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/OBJLoader.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true });
renderer.setClearColor(0x000000, 0);
  const fov = 45;
  const aspect = 2;  //холст по умолчанию
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 5, 20);

  

  const scene = new THREE.Scene();
  

  {
    const skyColor = 0xC0C0C0;  // светло-синий
    const groundColor = 0xBEBEBE;  // коричневато-оранжевый
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }
  let ourObj;
  {
    const objLoader = new OBJLoader();
    objLoader.load('models/park.obj', (object) => {
      scene.add(object);
      ourObj=object;
      
      object.rotation.y = 150;

    

    });
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
 
    renderer.render(scene, camera);

   
    requestAnimationFrame(render);

    ourObj.rotation.y += .02

 } 
    renderer.render(scene, camera);
 

  requestAnimationFrame(render);

}
main();