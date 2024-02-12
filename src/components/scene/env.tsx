"use client";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useState } from "react";

export interface IEnvironmentLightingProps {}

export default function EnvironmentLighting(props: IEnvironmentLightingProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /(iphone|ipod|ipad|android|blackberry|windows phone)/.test(userAgent);
      setIsMobile(mobile);
  }, []);

  console.log(isMobile)
  return (
    <>
      <Environment path="./" files="/images/env.hdr" />
      {/* <OrbitControls enableDamping={false} /> */}
      <ambientLight color={0xffffff} intensity={1} />
      {/* <ambientLight color={0X9bddff} intensity={1} /> */}
      <PerspectiveCamera
        makeDefault
        fov={isMobile?78:50}
        near={0.25}
        far={100}
        position={[0,isMobile?0.8: 1.3, 3]}
      />
      <OrbitControls
        enableDamping={false}
        makeDefault
        scale={[0, 1.2, 0]}
        maxPolarAngle={Math.PI * 0.495}
        maxDistance={10}
        minDistance={1}
        target-y={isMobile?0.8: 1.3}
        // target-x={-0.5}
      />
      {/* <PerspectiveCamera makeDefault position={[0, 6, -5]} rotation={[-Math.PI/2,0,-Math.PI/2]}/> */}
    </>
  );
}
