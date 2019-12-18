import { CHANGE_EMAIL, CHANGE_NAME, CHANGE_PLACEHOLDER } from '../constants';

const InitialState = {
  valueName: '',
  valueEmail: '',
  valuePlaceholder: ''
};

export default (state = InitialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        valueName: payload
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        valueEmail: payload
      };

    case CHANGE_PLACEHOLDER:
      return {
        ...state,
        valuePlaceholder: payload
      };

    default: return state;

  }
}