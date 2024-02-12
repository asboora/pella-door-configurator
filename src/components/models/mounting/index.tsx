/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 Mounting.gltf --transform --types 
Files: Mounting.gltf [71.52KB] > Mounting-transformed.glb [63.22KB] (12%)
*/

import { useAppSelector } from "@/hooks/reduxHook";
import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["mounting"]: THREE.Mesh;
    ["doorsliding_1"]: THREE.Mesh;
  };
  materials: {
    glass: THREE.MeshPhysicalMaterial;
    metal: THREE.MeshStandardMaterial;
  };
};

interface MountingProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  visible: boolean;
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Mounting({
  position,
  rotation,
  scale,
  visible,
}: MountingProps) {
  const { nodes, materials } = useGLTF("/gltf/Mounting.glb") as GLTFResult;
  //   console.log(nodes)

  const colors = useAppSelector((state) => state.essentialPatioDoor.colors);
  const MountingMaterial = new THREE.MeshStandardMaterial({
    color: colors.color, // Aluminum
    metalness: colors.metalness, // Max metalness for a metal look
    roughness: colors.roughness, // Adjust the roughness for the desired level of reflection
    side: THREE.DoubleSide,
  });

  return (
    <group dispose={null}>
      <group
        rotation={rotation}
        position={position}
        scale={scale}
        visible={visible}
      >
        <mesh
          geometry={nodes["mounting"].geometry}
          material={MountingMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/Mounting.glb");
