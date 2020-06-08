import initialState from "./initialState";
import * as types from '../Actions/types'


export default function (state = initialState.Auth, action) {
  switch (action.type) {
    case types.REGISTATION_LOADING:
      return { ...state, loading: true }
    case types.REGISTATION_SUCESS:
      return { ...state, loading: false, user: action.payload }
    case types.REGISTATION_FAIL:
      return { ...state, loading: false, error: true }
    default:
      return {
        ...state
      };
  }
}
