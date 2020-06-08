import * as types from './types'
import AsyncStorage from '@react-native-community/async-storage'
export const Registation = (data) => {
    console.log(data);
    return (dispatch) => {
        let result
        dispatch({ type:types.REGISTATION_LOADING })
        fetch(`http://46.101.108.156/api/user/signup`, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(res =>  RegistationSuccess(dispatch, data))
            .catch((error) => RegistationFail(dispatch, error))
    }
}
const RegistationSuccess= async(dispatch,respons)=>{
    console.log("respons",respons);
    await AsyncStorage.setItem('user',JSON.stringify(respons));
    dispatch({type:types.REGISTATION_SUCESS,payload:respons})
}
const RegistationFail=(dispatch,error)=>{
    console.log("error",error);
    dispatch({type:types.REGISTATION_FAIL,payload:error})
}

