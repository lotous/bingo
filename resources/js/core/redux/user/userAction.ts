import {AppThunk, AuthService} from '../..';
import { SET_USER, UserActionTypes, UserState } from '../..';
import { USER_INITIAL_STATE } from './userReducer';

export const setCurrentUser = (user: UserState): UserActionTypes => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const getAuthUser = (): AppThunk => async (dispatch) => {
    try {
        const response = await AuthService.getAuthUser();
        dispatch(setCurrentUser(response.data));
        return Promise.resolve(response);
    } catch (error) {
        dispatch(setCurrentUser(USER_INITIAL_STATE));
        return Promise.reject(error);
    }
};

export const logout = (): AppThunk => async (dispatch) => {
    try {
        const response = await AuthService.logout();
        dispatch(setCurrentUser(USER_INITIAL_STATE));
        return Promise.resolve(response);
    } catch (errors) {
        return Promise.resolve(errors);
    }
};
