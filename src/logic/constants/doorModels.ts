import { coordinateType, shapeKeyType } from "./types";

type ModelInfoType = {
  maxX: number;
  maxY: number;
  centerPoint: coordinateType;
  horizonaleMountingScale: number;
  veticalMountingScale: number;
  shapeKey: shapeKeyType;
};

export type ModelType = ModelInfoType;

export type Essential2PanelDoorModels =
  | "ESSPD5068"
  | "ESSPD5080"
  | "ESSPD6068"
  | "ESSPD6080"
  | "ESSPD50610"
  | "ESSPD51068"
  | "ESSPD60610";

export type ModelsData = {
  [K in Essential2PanelDoorModels]?: ModelInfoType;
};

export const modelsData: ModelsData = {
  ESSPD5068: {
    maxX: 0.669131,
    maxY: 1.93358,
    centerPoint: [-0.352425, 1.01282, 0.059502],
    horizonaleMountingScale: 1,
    veticalMountingScale: 2.85,
    shapeKey: [0, 0, 0, 0, 0, 0],
  },
  ESSPD5080: {
    maxX: 0.669131,
    maxY: 2.35,
    centerPoint: [-0.35242, 1.2204, 0.059502], //1.2127
    horizonaleMountingScale: 1,
    veticalMountingScale: 3.5,
    shapeKey: [1, 0, 0, 0, 0, 0],
  },
  ESSPD6068: {
    maxX: 0.82153,
    maxY: 1.93358,
    centerPoint: [-0.42863, 1.01282, 0.059502], //1.2127
    horizonaleMountingScale: 1.24,
    veticalMountingScale: 2.85,
    shapeKey: [0, 1, 0, 0, 0, 0],
  },
  ESSPD6080: {
    maxX: 0.82153,
    maxY: 2.35,
    centerPoint: [-0.42863, 1.2204, 0.059502],
    horizonaleMountingScale: 1.24,
    veticalMountingScale: 3.5,
    shapeKey: [0, 0, 1, 0, 0, 0],
  },
  ESSPD50610: {
    maxX: 0.67131,
    maxY: 1.9844,
    centerPoint: [-0.352425, 1.0382, 0.059502],
    horizonaleMountingScale: 1,
    veticalMountingScale: 2.95,
    shapeKey: [0, 0, 0, 1, 0, 0],
  },
  ESSPD51068: {
    maxX: 0.79296,
    maxY: 1.93358,
    centerPoint: [-0.4191, 1.01282, 0.059502],
    horizonaleMountingScale: 1.27,
    veticalMountingScale: 2.85,
    shapeKey: [0, 0, 0, 0, 1, 0],
  },
  ESSPD60610: {
    maxX: 0.82153,
    maxY: 1.9844,
    centerPoint: [-0.42966, 1.01282, 0.059502], //1.2127
    horizonaleMountingScale: 1.24,
    veticalMountingScale: 2.95,
    shapeKey: [0, 0, 0, 0, 0, 1],
  },
};
