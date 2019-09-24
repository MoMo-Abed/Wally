import {
  DRAWER_STATE_ACTION,
  SEARCH_VALUE,
  Categories_VALUE,
  VIEW_IMAGE
} from "./types";

export function DrawerAction() {
  return {
    type: DRAWER_STATE_ACTION
  };
}

export function Search_V_Action(state) {
  return {
    type: SEARCH_VALUE,
    payload: state
  };
}

export function Categories_Value(state) {
  return {
    type: Categories_VALUE,
    payload: state
  };
}

export function Send_Image_To_View(state) {
  return {
    type: VIEW_IMAGE,
    payload: state
  };
}
