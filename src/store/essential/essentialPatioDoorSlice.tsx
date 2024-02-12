// essential.ts
import {
  DoorSideTypes,
  PatternTypes,
  StandardMaterialPropsType,
  coordinateType,
  shapeKeyType,
} from "@/logic/constants/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StartingPointInterface {
  minX: number; // minX
  maxX: number; // maxX
  minY: number; // minY
  maxY: number; // maxY
  centerPoint: coordinateType; // Center of the door
}

interface PatioDoorState {
  pattern: PatternTypes;
  startingPoint: StartingPointInterface;
  factors: FactorsInterface;
  colors: StandardMaterialPropsType;
}

interface FactorsInterface {
  baseScale: coordinateType; // minX
  rightDoorZOffset: number; //Used for replicating the Left Mountings to Right Door which is slightly ahead in Z direction
  rightDoorBottomYOffset: number; //Used for adjustment in Right door as that is slightly lower starting in Y direction
  horizontalMountingScale: number; // Initial size for base model , horizontal Mountings
  veticalMountingScale: number; // Initial size of vertical mounting as multiple of horizontal mounting size
  leftDoorOpenOffset: number; //0 to 0.7  Tell the percentage of door opened varies between
  shapeKey: shapeKeyType;
}

const initialState: PatioDoorState = {
  pattern: "Rectangular",
  startingPoint: {
    minX: 0.035719, // minX
    maxX: 0.669131, // maxX
    minY: 0.092075, // minY
    maxY: 1.93358, // maxY
    centerPoint: [-0.352425, 1.01282, 0.059502], // Center of the door
  },
  factors: {
    baseScale: [0.305, 0.305, 0.305],
    rightDoorZOffset: -0.045498, //Used for replicating the Left Mountings to Right Door which is slightly ahead in Z direction
    rightDoorBottomYOffset: 0.0, //Used for adjustment in Right door as that is slightly lower starting in Y direction
    horizontalMountingScale: 1, // Initial size for base model , horizontal Mountings
    veticalMountingScale: 2.85, // Initial size of vertical mounting as multiple of horizontal mounting size
    leftDoorOpenOffset: 0, //0 to 0.7  Tell the percentage of door opened varies between
    shapeKey: [0, 0, 0, 0, 0, 0],
  },
  colors: { color: 0xc9bba0, metalness: 0.6, roughness: 0.35 },
};

export const essentialPatioDoorSlice = createSlice({
  name: "essentialPatioDoor",
  initialState,
  reducers: {
    updatePattern: (state, action: PayloadAction<PatternTypes>) => {
      state.pattern = action.payload;
    },
    setLeftDoorOpenOffset: (state, action: PayloadAction<number>) => {
      state.factors.leftDoorOpenOffset = action.payload;
    },
    setStartingPoint: (
      state,
      action: PayloadAction<{
        maxX: number;
        maxY: number;
        centerPoint: coordinateType;
        horizonaleMountingScale: number;
        veticalMountingScale: number;
        shapeKey: shapeKeyType;
      }>,
    ) => {
      state.startingPoint.maxX = action.payload.maxX;
      state.startingPoint.maxY = action.payload.maxY;
      state.startingPoint.centerPoint = action.payload.centerPoint;
      state.factors.horizontalMountingScale =
        action.payload.horizonaleMountingScale;
      state.factors.veticalMountingScale = action.payload.veticalMountingScale;
      state.factors.shapeKey = action.payload.shapeKey;
    },
    updateSelectedColor: (
      state,
      action: PayloadAction<StandardMaterialPropsType>,
    ) => {
      state.colors.color = action.payload.color;
      state.colors.metalness = action.payload.metalness;
      state.colors.roughness = action.payload.roughness;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updatePattern,
  setLeftDoorOpenOffset,
  setStartingPoint,
  updateSelectedColor,
} = essentialPatioDoorSlice.actions;

export default essentialPatioDoorSlice.reducer;
