import * as actions from '../Types';

export const addItemsToFavorite = body => {
  console.log('body===>', body);
  return dispatch => {
    dispatch({
      type: actions.ADD_TO_FAVORITE,
      payload: {
        favoriteEventData: body,
      },
    });
  };
};
