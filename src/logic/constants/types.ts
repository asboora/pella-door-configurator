export type PatternTypes =
  | "Rectangular"
  | "Prairie9"
  | "Cottage"
  | "Prairie6Top"
  | "Prairie6Bottom"
  | "Prairie6Left"
  | "Prairie6Right";

export type DoorSideTypes = "left" | "right";

export type DirectionType = "rows" | "columns";

export type MountingPropertiesType = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  visible: boolean;
  doorSide: "left" | "right";
};

export type coordinateType = [number, number, number];
export type shapeKeyType =
  | [0, 0, 0, 0, 0, 0]
  | [1, 0, 0, 0, 0, 0]
  | [0, 1, 0, 0, 0, 0]
  | [0, 0, 1, 0, 0, 0]
  | [0, 0, 0, 1, 0, 0]
  | [0, 0, 0, 0, 1, 0]
  | [0, 0, 0, 0, 0, 1];

export interface StandardMaterialPropsType {
  color: number;
  metalness: number;
  roughness: number;
}

export type ExteriorColorsForEssetialType = {
  [key in
    | "stoneWhite"
    | "cashmere"
    | "bronze"
    | "gunmetal"
    | "ebony"]: StandardMaterialPropsType;
};
