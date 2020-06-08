import initialState from "./initialState";
import * as types from '../Actions/types'


export default function (state = initialState.Services, action) {
  switch (action.type) {
    case types.CATEGORY_LOADING:
      return { ...state, loading: true }
    case types.CATEGORY_SUCESS:
      return { ...state, loading: false, categories: action.payload }
    case types.CATEGORY_FAIL:
      return { ...state, loading: false, error: true }
    default:
      return {
        ...state
      };
  }
}
