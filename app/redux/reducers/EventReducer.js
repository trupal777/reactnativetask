import * as actions from '../Types';

const initialState = {
  favoriteEventData: [],
};

export const EventReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteEventData: payload.favoriteEventData,
      };
    default:
      return state;
  }
};
