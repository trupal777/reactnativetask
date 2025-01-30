import * as actions from '../Types';

const initialState = {
  currentLanguage: null,
  shortcut: null,
  languageName: null,
};

export const LanguageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.APP_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload.currentLanguage,
        shortcut: payload.shortcut,
        languageName: payload.languageName,
      };
    default:
      return state;
  }
};
