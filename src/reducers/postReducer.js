import { FETCH_POSTS, NEW_POST } from '../actions/types';

// could be also called previousState
const initialState = {
  items: [],
  item: {},
};

type Action = {type:string, payload:any}

export default function (state:Object = initialState, action:Action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
