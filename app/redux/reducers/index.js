import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import {AuthReducer} from './AuthReducer';
import {EventReducer} from './EventReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  authReducer: AuthReducer,
  eventReducer: EventReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: () => {
    return [thunk];
  },
});

let persistor = persistStore(store);

export {persistor, store};
