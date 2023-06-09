/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_wheelTractorBack: THREE.Mesh;
    Mesh_wheelTractorBack_1: THREE.Mesh;
    Mesh_wheelTractorBack_2: THREE.Mesh;
  };
  materials: {
    paintYellow: THREE.MeshStandardMaterial;
    plastic: THREE.MeshStandardMaterial;
    carTire: THREE.MeshStandardMaterial;
  };
};

export default function WheelBack(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/assets/wheelTractorBack.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheelTractorBack.geometry}
        material={materials.paintYellow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheelTractorBack_1.geometry}
        material={materials.plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_wheelTractorBack_2.geometry}
        material={materials.carTire}
      />
    </group>
  );
}

useGLTF.preload('/assets/wheelTractorBack.glb');
