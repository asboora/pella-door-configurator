import { DirectionType, DoorSideTypes, PatternTypes } from "./types";

type HorizontalMountingDetail = {
  visibility: boolean;
  start: number;
  end: number;
  verticalPosition: number;
};

type VerticalMountingDetail = {
  visibility: boolean;
  start: number;
  end: number;
  horizontalPosition: number;
};

type MountingDetail = HorizontalMountingDetail | VerticalMountingDetail;

type DoorPattern = {
  rows: MountingDetail[];
  columns: MountingDetail[];
};

const patterns: Record<
  PatternTypes,
  Record<DoorSideTypes, Record<DirectionType, Array<MountingDetail>>>
> = {
  Rectangular: {
    left: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 4 },
        { visibility: true, start: 0, end: 1, verticalPosition: 2 / 4 },
        { visibility: true, start: 0, end: 1, verticalPosition: 3 / 4 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 3 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 2 / 3 },
      ],
    },
    right: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 4 },
        { visibility: true, start: 0, end: 1, verticalPosition: 2 / 4 },
        { visibility: true, start: 0, end: 1, verticalPosition: 3 / 4 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 3 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 2 / 3 },
      ],
    },
  },

  Prairie9: {
    left: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
    right: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
  },
  Cottage: {
    left: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 4/5 },
      ],
      columns: [
        { visibility: true, start: 4/5, end: 1, horizontalPosition: 1 / 3 },
        { visibility: true, start: 4/5, end: 1, horizontalPosition: 2 / 3 },
      ],
    },
    right: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 4/5 },
      ],
      columns: [
        { visibility: true, start: 4/5, end: 1, horizontalPosition: 1 / 3 },
        { visibility: true, start: 4/5, end: 1, horizontalPosition: 2 / 3 },
      ],
    },
  },
  Prairie6Top: {
    left: {
      rows: [{ visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 }],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
    right: {
      rows: [{ visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 }],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
  },
  Prairie6Bottom: {
    left: {
      rows: [{ visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 }],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
    right: {
      rows: [{ visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 }],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
  },
  Prairie6Left: {
    left: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
    right: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 5 / 6 },
      ],
    },
  },
  Prairie6Right: {
    left: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
      ],
    },
    right: {
      rows: [
        { visibility: true, start: 0, end: 1, verticalPosition: 1 / 10 },
        { visibility: true, start: 0, end: 1, verticalPosition: 9 / 10 },
      ],
      columns: [
        { visibility: true, start: 0, end: 1, horizontalPosition: 1 / 6 },
      ],
    },
  },
  // Add other patterns with similar structure
};

export const mountingCount = (
  patterType: PatternTypes,
  doorSide: DoorSideTypes,
  direction: DirectionType,
): number => {
  return patterns[patterType][doorSide][direction].length;
};

export const mountingPosition = (
  patternType: PatternTypes,
  doorSide: DoorSideTypes,
  direction: DirectionType,
  index: number,
): MountingDetail | undefined => {
  const pattern = patterns[patternType];
  if (!pattern) {
    console.error(`Pattern ${patternType} not found`);
    return undefined;
  }

  const side = pattern[doorSide];
  if (!side) {
    console.error(`Door side ${doorSide} not found in pattern ${patternType}`);
    return undefined;
  }

  const dir = side[direction];
  if (!dir) {
    console.error(
      `Direction ${direction} not found in pattern ${patternType}, door side ${doorSide}`,
    );
    return undefined;
  }

  if (index < 0 || index >= dir.length) {
    console.error(
      `Index ${index} is out of bounds for pattern ${patternType}, door side ${doorSide}, direction ${direction}`,
    );
    return undefined;
  }

  return dir[index];
};
