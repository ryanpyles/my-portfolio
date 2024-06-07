import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function Dodecahedron({ onSectionChange }) {
  const mesh = useRef();
  const { camera } = useThree();
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
        switch (faceIndex) {
          case 0:
          case 1:
            onSectionChange('aboutMe');
            break;
          case 2:
          case 3:
            onSectionChange('projects');
            break;
          case 4:
          case 5:
            onSectionChange('resume');
            break;
          case 6:
          case 7:
            onSectionChange('blog');
            break;
          case 8:
          case 9:
            onSectionChange('stackFXCreative');
            break;
          case 10:
          case 11:
            onSectionChange('contact');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, [camera, raycaster, onSectionChange]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <mesh ref={mesh}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    </div>
  );
}
