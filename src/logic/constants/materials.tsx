import * as THREE from "three";

interface StandardMaterialPropsType {
  color: number;
  metalness: number;
  roughness: number;
}

type ExteriorColorsForEssetialType = {
  [key in
    | "stoneWhite"
    | "cashmere"
    | "bronze"
    | "gunmetal"
    | "ebony"]: StandardMaterialPropsType;
};

export const ExteriorColorsForEssetial: ExteriorColorsForEssetialType = {
  stoneWhite: { color: 0xf3f0e1, metalness: 0.6, roughness: 0.35 },
  cashmere: { color: 0xc9bba0, metalness: 0.6, roughness: 0.35 },
  bronze: { color: 0x3a3730, metalness: 0.6, roughness: 0.35 },
  gunmetal: { color: 0x454b4d, metalness: 0.6, roughness: 0.35 },
  ebony: { color: 0x010006, metalness: 0.6, roughness: 0.35 },
};
