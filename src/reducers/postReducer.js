import { FETCH_POSTS, NEW_POST } from '../actions/types';

// could be also called previousState
const initialState = {
  items: [],
  item: {},
};

export default function (state:Object = initialState, action:{type:string}) {
  switch (action.type) {
    default:
      return state;
  }
}
