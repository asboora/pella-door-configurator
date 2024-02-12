/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ESSPD5S60.gltf --transform --types 
Files: ESSPD5S60.gltf [71.52KB] > ESSPD5S60-transformed.glb [63.22KB] (12%)
*/

import { useAppSelector } from "@/hooks/reduxHook";
import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    doorframe: THREE.Mesh;
  };
  materials: {
    metal: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function DoorFrame(props: JSX.IntrinsicElements["group"]) {
  const shapeKey = useAppSelector(
    (state) => state.essentialPatioDoor.factors.shapeKey,
  );
  const { nodes, materials } = useGLTF("/gltf/doorframe.glb") as GLTFResult;
  // console.log(nodes.doorframe.morphTargetDictionary)
  const colors = useAppSelector((state) => state.essentialPatioDoor.colors);
  const FrameMaterial = new THREE.MeshStandardMaterial({
    color: colors.color, // Aluminum
    metalness: colors.metalness, // Max metalness for a metal look
    roughness: colors.roughness, // Adjust the roughness for the desired level of reflection
    side: THREE.DoubleSide,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.doorframe.geometry}
        material={FrameMaterial}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.305}
        morphTargetDictionary={nodes.doorframe.morphTargetDictionary}
        morphTargetInfluences={shapeKey}
      />
    </group>
  );
}

useGLTF.preload("/gltf/doorframe.glb");
