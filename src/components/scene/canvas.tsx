"use client";

import { Door } from "@/components/models/door";
import { DoorFrame } from "@/components/models/door_frame";
import { Mounting } from "@/components/models/mounting";
import { BaseScale } from "@/logic/constants/variables";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EnvironmentLighting from "./env";
import DoorCanvas from "./configuration/doorsCanvas";
import MountingsCanvas from "./configuration/mountingsCanvas";
// import { patterns } from "@/logic/constants/pattern";
import { ACESFilmicToneMapping } from "three";
export interface ICanvasProps {}

export default function MyCanvas(props: ICanvasProps) {
  return (
    <Canvas
    gl={{
      antialias: true,
      preserveDrawingBuffer: true,
      toneMappingExposure: 1.5,
      toneMapping: ACESFilmicToneMapping,
    }}

    style={{ background: 'rgb(242, 242, 242)' }} // Replace with the desired color
    >
      <Suspense fallback={null}>
        <EnvironmentLighting />
        <DoorFrame /> {/* Load Door External Frame */}
        <DoorCanvas /> {/* Load Doors */}
        <MountingsCanvas /> {/* Load Mountings */}
      </Suspense>
    </Canvas>
  );
}
