import { Box, OrbitControls, Plane } from '@react-three/drei';
import { RigidBody } from '../lib/react-three-rapier';
import Vehicle from './Vehicle';
import { Vector2, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function Ground() {
  return (
    <RigidBody colliders="cuboid">
      <RigidBody type="fixed" colliders="cuboid">
        <Box args={[100, 100, 0.5]} rotation={[Math.PI * -0.5, 0, 0]} />;
      </RigidBody>
    </RigidBody>
  );
}

function Scene() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.setY(2);
  });

  return (
    <>
      <OrbitControls />
      <Vehicle />
      <Ground />
    </>
  );
}

export default Scene;
