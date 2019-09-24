import {
  SEARCH_VALUE,
  DRAWER_STATE_ACTION,
  Categories_VALUE,
  VIEW_IMAGE
} from "../Action/types";

const initialState = {
  DrawerState: false,
  Search_V_State: "",
  Categories_V_State: "All",
  ImageView: {
    id: "ydUG5wMk6q4",
    created_at: "2018-07-19T10:43:39-04:00",
    updated_at: "2019-09-14T01:05:52-04:00",
    width: 5184,
    height: 3456,
    color: "#E6075B",
    description:
      "This was a subject of a photo shoot teaching other studio lighting and how to add some lighting effect to bring out shadow and color",
    alt_description: "red rose with black background",
    urls: {
      small:
        "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjkwNDgwfQ",
      thumb:
        "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjkwNDgwfQ",
      raw:
        "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjkwNDgwfQ",
      full:
        "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkwNDgwfQ"
    },
    likes: 37,
    liked_by_user: false,
    tags: [
      {
        title: "flower"
      },
      {
        title: "rose"
      },
      {
        title: "plant"
      }
    ],
    links: {
      self: "https://api.unsplash.com/photos/ydUG5wMk6q4",
      html: "https://unsplash.com/photos/ydUG5wMk6q4",
      download: "https://unsplash.com/photos/ydUG5wMk6q4/download",
      download_location: "https://api.unsplash.com/photos/ydUG5wMk6q4/download"
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DRAWER_STATE_ACTION:
      return {
        ...state,
        DrawerState: !state.DrawerState
      };

    case SEARCH_VALUE:
      return {
        ...state,
        Categories_V_State: action.payload
      };

    case Categories_VALUE:
      return {
        ...state,
        Categories_V_State: action.payload
      };

    case VIEW_IMAGE:
      return {
        ...state,
        ImageView: action.payload
      };
    default:
      return state;
  }
}
