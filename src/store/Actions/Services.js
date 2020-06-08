import * as types from './types'

export const Servicecategory = () => {
    return (dispatch) => {
        dispatch({ type:types.CATEGORY_LOADING })
        fetch("http://46.101.108.156/service_cats", {
            method: 'GET',
        })
            .then(res => res.json() )
            .then(respons=>getCategorySuccess(dispatch, respons))
            .catch((error) => getCategoryFail(dispatch, error))
     }
}
const getCategorySuccess= (dispatch,respons)=>{
    console.log("respons",respons);
    dispatch({type:types.CATEGORY_SUCESS,payload:respons})
}
const getCategoryFail=(dispatch,error)=>{
    console.log("error",error);
    dispatch({type:types.CATEGORY_FAIL,payload:error})
}

  