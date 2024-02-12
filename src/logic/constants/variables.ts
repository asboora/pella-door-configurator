export const HorizontalMountingRightDoorRotation: [number, number, number] = [
  Math.PI,
  -Math.PI,
  Math.PI,
];
export const HorizontalMountingLeftDoorRotation: [number, number, number] = [
  -Math.PI,
  0,
  -Math.PI,
];
export const VerticalMountingLeftDoorRotation: [number, number, number] = [
  -Math.PI,
  0,
  -Math.PI / 2,
];
export const VerticalMountingRightDoorRotation: [number, number, number] = [
  -Math.PI,
  0,
  Math.PI / 2,
];

export const BaseScale: [number, number, number] = [0.305, 0.305, 0.305];
export const zOffset: number = -0.045498; //Used for replicating the Left Mountings to Right Door which is slightly ahead in Z direction
export const rightDoorBottomYOffset: number = 0.045498; //Used for adjustment in Right door as that is slightly lower starting in Y direction
export const horizontalMountingScale: number = 1; // Initial size for base model , horizontal Mountings
export const veticalMountingScale: number = 2.85; // Initial size as multiple of horizontal mounting size

export const patterName = "Rectangular";
export const leftDoorOpenOffset = 0;
