import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function Dodecahedron() {
  const mesh = useRef();
  const { camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseClick = (event) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh.current);

      if (intersects.length > 0) {
        const faceIndex = intersects[0].faceIndex;
        console.log(`Face ${faceIndex} clicked`);
        // Add logic to navigate to different sections based on faceIndex
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, [camera, raycaster]);

  return (
    <mesh ref={mesh}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}
