import { useAppSelector } from "@/hooks/reduxHook";
import { mountingCount, mountingPosition } from "./constants/pattern";
import {
  DoorSideTypes,
  MountingPropertiesType,
  PatternTypes,
} from "./constants/types";
import {
  HorizontalMountingLeftDoorRotation,
  HorizontalMountingRightDoorRotation,
  VerticalMountingLeftDoorRotation,
} from "./constants/variables";

export function useCalculateMountings(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  center: [number, number, number],
  patternName: PatternTypes,
  doorVariation: "resize",
): MountingPropertiesType[] {
  const mountings: MountingPropertiesType[] = [];

  const Factors = useAppSelector((state) => state.essentialPatioDoor.factors);

  const BaseScale = Factors.baseScale;
  const horizontalMountingScale = Factors.horizontalMountingScale;
  const veticalMountingScale = Factors.veticalMountingScale;
  const rightDoorBottomYOffset = Factors.rightDoorBottomYOffset;
  const zOffset = Factors.rightDoorZOffset;

  //Find the number of mountings in rows and columns for the given pattern
  const rowsLeft = mountingCount(patternName, "left", "rows");
  const rowsRight = mountingCount(patternName, "right", "rows");
  const colsLeft = mountingCount(patternName, "left", "columns");
  const colsRight = mountingCount(patternName, "right", "columns");

  //Find the position of Vertical Mounting in the left door
  for (let col = 0, dir: DoorSideTypes = "left"; col < colsLeft; col++) {
    //Fetch the configuration data for the mountings of that door
    const mountingDetail = mountingPosition(patternName, dir, "columns", col);

    let position;
    if (mountingDetail) {
      //For Type Safety
      if ("horizontalPosition" in mountingDetail) {
        position = mountingDetail?.horizontalPosition;
        //As the most right position in Glass part is minX and most Left position in Glass is maxX
        // So to find the position of First , second , third .... mounting  use this formula
        const posXLeft = minX + (maxX - minX) * position;

        //Generally the start is 0 so it will start from bottom of the door, but when the start is required
        //from some part, then object will have a value in fraction for start , and it multiply with total length of door, which will make the
        //mounting start from offser
        const posY = minY + (maxY - minY) * mountingDetail.start;

        //nothing in Z direction
        const posZ = center[2];
        // Add the vertical mountings of left door to array
        mountings.push({
          position: [-posXLeft, posY, posZ],
          rotation: VerticalMountingLeftDoorRotation, //Rotate accordingly, original position of mounting is horizonatal
          scale: [
            BaseScale[0] * //Base model scale
              veticalMountingScale * // Orginial mounting is Horizonatal mounting which is small, so increasing size of that mounting to fit in vertical space.
              (mountingDetail.start === 0 && mountingDetail.end === 1 // If the mounting starts from base
                ? 1 // Then keep the original size(full)
                : mountingDetail.end - mountingDetail.start), //If the mouting start from offset, then reduce the size of mounting to keep within door, basically (1 - fraction from it starts) i.e remaining height of the door it will cover
            BaseScale[1], // keeping the  y scale same
            BaseScale[2], // keeping the  z scale same
          ],
          visible: mountingDetail.visibility,
          doorSide: dir,
        });
      }
    }
  }
  //Mirror the left Door Mountings
  //Find the position of Vertical Mounting in the Right door
  for (let col = 0, dir: DoorSideTypes = "right"; col < colsRight; col++) {
    const mountingDetail = mountingPosition(patternName, dir, "columns", col);
    let position;
    if (mountingDetail) {
      //For Type Safety
      if ("horizontalPosition" in mountingDetail) {
        // Now you can safely access horizontalPosition
        position = mountingDetail?.horizontalPosition;

        const posXRight = minX + (maxX - minX) * position;
        const posY = minY + (maxY - minY) * mountingDetail.start;
        const posZ = center[2]; // Assuming no depth for simplicity

        mountings.push({
          position: [
            posXRight,
            //If Right door(which starts little lower than right) has mounting starting from offset, then neglect the orginial offset(which lowers the mountings)
            //but if mountings starts from base then keep the original offset in account
            posY - (mountingDetail.start === 0 ? rightDoorBottomYOffset : 0),
            posZ - zOffset, //Z offset for replicating the left door to right which is little forward in scene
          ],
          rotation: VerticalMountingLeftDoorRotation,
          scale: [
            (BaseScale[0] * veticalMountingScale +
              (mountingDetail.start === 0 ? rightDoorBottomYOffset : 0)) * //Add the offset if mouting start from base otherwise start from exact point, ADJUSTMENT BY 0.02 TRIAL AND ERROR
              (mountingDetail.start === 0 && mountingDetail.end === 1
                ? 1
                : mountingDetail.end - mountingDetail.start), //Reduce the height of Mounting as remainng part of the door after the start, so that it dont go out of the door(which can happen if we keep it size of door and start it from offset)
            BaseScale[1],
            BaseScale[2],
          ],
          visible: mountingDetail.visibility,
          doorSide: dir,
        });
      }
    }
  }

  //Find the position of Horizonatal Mounting in the left door
  for (let row = 0, dir: DoorSideTypes = "left"; row < rowsLeft; row++) {
    //Fetch the detail of each mouting by sending as index
    const mountingDetail = mountingPosition(patternName, dir, "rows", row);
    let position;
    if (mountingDetail) {
      //For type safety
      if ("verticalPosition" in mountingDetail) {
        //Find position of the mounting as fraction of the door height in vertcial direction
        position = mountingDetail?.verticalPosition;

        //minX is start of the mountings
        //(maxX - minX)* mountingDetail.start is added if offset is provided for the start of mounting
        const posX = minX + (maxX - minX) * mountingDetail.start;
        //posY tell the vertical position of the mounting
        const posY = minY + (maxY - minY) * position;
        const posZ = center[2]; // Assuming no depth for simplicity

        mountings.push({
          position: [-posX, posY, posZ],
          rotation: HorizontalMountingLeftDoorRotation,
          scale: [
            BaseScale[0] * //Base model scale
              horizontalMountingScale * // Orginial mounting is Horizonatal mounting which is small, so increasing size of that mounting to fit in vertical space.
              (mountingDetail.start === 0 && mountingDetail.end === 1 // If the mounting starts from base
                ? 1 // Then keep the original size(full)
                : mountingDetail.end - mountingDetail.start), //If the mouting start from offset, then reduce the size of mounting to keep within door, basically (1 - fraction from it starts) i.e remaining height of the door it will cover
            BaseScale[1], // keeping the  y scale same
            BaseScale[2], // keeping the  z scale same
          ],
          visible: mountingDetail.visibility,
          doorSide: dir,
        });
      }
    }
  }

  for (let row = 0, dir: DoorSideTypes = "right"; row < rowsRight; row++) {
    const mountingDetail = mountingPosition(patternName, dir, "rows", row);
    let position;
    if (mountingDetail) {
      if ("verticalPosition" in mountingDetail) {
        // Now you can safely access horizontalPosition
        position = mountingDetail?.verticalPosition;

        const posX = minX + (maxX - minX) * mountingDetail.start;
        const posY = minY + (maxY - minY) * position;
        const posZ = center[2]; // Assuming no depth for simplicity

        mountings.push({
          position: [posX, posY, posZ - zOffset],
          rotation: HorizontalMountingRightDoorRotation,
          scale: [
            BaseScale[0] * //Base model scale
              horizontalMountingScale * // Orginial mounting is Horizonatal mounting which is small, so increasing size of that mounting to fit in vertical space.
              (mountingDetail.start === 0 && mountingDetail.end === 1 // If the mounting starts from base
                ? 1 // Then keep the original size(full)
                : mountingDetail.end - mountingDetail.start),
            BaseScale[1],
            BaseScale[2],
          ],
          visible: mountingDetail.visibility,
          doorSide: dir,
        });
      }
    }
  }

  return mountings;
}
