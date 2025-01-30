import AsyncStorage from '@react-native-async-storage/async-storage';
import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {getCredentials} from '../../utils/credentials';
import {store} from '../../redux/reducers';

// INFO: all APIs added here
const getToken = async () => {
  try {
    let res = await store.getState().authReducer.userLoginResponse;

    if (res) {
      return res.token;
    } else {
      let playerId = '';
      // ** AUTH and REFRESH TOKEN expired
    }
  } catch (e) {
    // console.log('object', e);
  }
};
// *get categories list

export const _UserLogin = async body => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
  });

  return _api_calls('POST', `/login`, headers, body);
};
export const _getEventsList = async () => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: await getToken(),
  });

  return _api_calls('POST', `/events-listing`, headers);
};
