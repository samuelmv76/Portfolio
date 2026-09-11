import type { ComponentType } from "react";
import type { Arte } from "../../data/perfil";
import { ShopArt } from "./ShopArt";
import { TacticsArt } from "./TacticsArt";
import { ChartArt } from "./ChartArt";

export const ilustraciones: Record<Arte, ComponentType> = {
  tienda: ShopArt,
  tactica: TacticsArt,
  grafica: ChartArt,
};
