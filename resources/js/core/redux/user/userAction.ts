import { AuthService } from '../..';

import { USER_INITIAL_STATE } from './userReducer';
import { DispatchType, IUser, SET_USER, UserAction, UserState } from "../../types/user-types";


export const setCurrentUser = ( user: IUser ): UserAction => {
    return {
        type: SET_USER,
        user: user
    };
};

export function getAuthUser(action: UserAction): ( dispatch: DispatchType ) => void {
    return (dispatch: DispatchType) => {
        AuthService.getAuthUser().then((response) =>{
            dispatch(setCurrentUser( response.data ))
        }).catch((error) => {
            dispatch( setCurrentUser( USER_INITIAL_STATE ) )
        });
    }
}

export function logout(action: UserAction): ( dispatch: DispatchType ) => void {
    return (dispatch: DispatchType) => {
        AuthService.logout().then((response) =>{
            dispatch( setCurrentUser( USER_INITIAL_STATE ) )
        }).catch((error) => {
            console.log(error)
        });
    }
}


