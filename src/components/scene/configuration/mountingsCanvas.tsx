import { Mounting } from "@/components/models/mounting";
import { useAppSelector } from "@/hooks/reduxHook";
import { useCalculateMountings } from "@/logic/mountingPosition";

export interface IMountingsCanvasProps {}

export default function MountingsCanvas(props: IMountingsCanvasProps) {
  const patternName = useAppSelector(
    (state) => state.essentialPatioDoor.pattern,
  );
  const initiatingPoints = useAppSelector(
    (state) => state.essentialPatioDoor.startingPoint,
  );
  const leftDoorOpenOffset = useAppSelector(
    (state) => state.essentialPatioDoor.factors.leftDoorOpenOffset,
  );

  const doorMountingConfigurations = useCalculateMountings(
    initiatingPoints.minX, // minX
    initiatingPoints.maxX, // maxX
    initiatingPoints.minY, // minY
    initiatingPoints.maxY, // maxY
    initiatingPoints.centerPoint, // Center of the door
    patternName, // Pattern name
    "resize", // Door variation
  );

  return (
    <>
      {doorMountingConfigurations?.map((mounting, index) => {
        // Adjust the left door position with leftDoorOpenOffset, and add the constant only if the doorSide is 'left' so that only left door mountings slide
        const adjustedPosition: [number, number, number] =
          mounting.doorSide === "right"
            ? [
                mounting.position[0] - leftDoorOpenOffset,
                mounting.position[1],
                mounting.position[2],
              ]
            : mounting.position;

        return (
          <Mounting
            key={index}
            rotation={mounting.rotation}
            position={adjustedPosition}
            scale={mounting.scale}
            visible={mounting.visible}
          />
        );
      })}
    </>
  );
}
