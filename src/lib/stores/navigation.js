import { Store } from "laco";

export const NavStore = new Store({ state: "campaign" });

export const changeState = newState =>
  NavStore.set(() => ({ state: newState }));
