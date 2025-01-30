import {_getEventsList, _UserLogin} from '../../services/api-services/ApiCalls';
import * as actions from './../Types';

export const userLogin = body => {
  return dispatch => {
    return _UserLogin(body)
      .then(response => {
        dispatch({
          type: actions.IS_LOGIN,
          payload: {
            userLoginResponse: response.data,
            isUserLogin: true,
          },
        });
        return response;
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getEventsList = () => {
  return dispatch => {
    return _getEventsList()
      .then(response => {
        return response;
      })
      .catch(error => {
        throw error;
      });
  };
};
