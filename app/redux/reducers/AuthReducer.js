import * as actions from '../Types';

const initialState = {
  isUserLogin: false,
  userLoginResponse: null,
};

export const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.IS_LOGIN:
      return {
        ...state,
        isUserLogin: payload.isUserLogin,
        userLoginResponse: payload.userLoginResponse,
      };
    default:
      return state;
  }
};
