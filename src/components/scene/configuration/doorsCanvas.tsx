"use client";

import { Door } from "@/components/models/door";
import { useAppSelector } from "@/hooks/reduxHook";

export interface IDoorCanvasProps {}

export default function DoorCanvas(props: IDoorCanvasProps) {
  const leftDoorOpenOffset = useAppSelector(
    (state) => state.essentialPatioDoor.factors.leftDoorOpenOffset,
  );
  const BaseScale = useAppSelector(
    (state) => state.essentialPatioDoor.factors.baseScale,
  );

  return (
    <>
      {/* Left Door */}
      <Door
        rotation={[Math.PI, 0, Math.PI]}
        position={[-0.352425, 1.01282, 0.059502]}
        scale={[BaseScale[0], BaseScale[1], BaseScale[2]]}
      />

      {/* Right Door */}
      <Door
        rotation={[-Math.PI, -Math.PI, Math.PI]}
        position={[0.352425 - leftDoorOpenOffset, 1.01282, 0.105]}
        // scale={[BaseScale[0], BaseScale[1] * 1.01, BaseScale[2]]}
        scale={[BaseScale[0], BaseScale[1], BaseScale[2]]}
      />
    </>
  );
}
