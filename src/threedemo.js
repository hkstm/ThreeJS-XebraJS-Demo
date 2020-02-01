import * as THREE from 'three';
var camera, scene, renderer;
var geometry, material, mesh;
var direction, speed;

 
function init() {
    direction = 1;
    speed = 1;
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
}
 
function animate() {
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    var bound = 1.28;
    if(mesh.position.x > bound - 0.001) {
        direction = -1;
    } else if (mesh.position.x < -bound + 0.001) {
        direction = 1;
    }
    
    mesh.position.x += ((Math.abs(0 - mesh.position.x)/100 + 0.005) * direction);
    renderer.render( scene, camera );
 
}

function runthreejsdemo() {
    init();
    animate();
};

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

export {runthreejsdemo}