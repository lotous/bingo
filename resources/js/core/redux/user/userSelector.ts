import {RootState, UserState} from '../..';

export const getUserName = (rootState: RootState): string => {
    return rootState.user.name;
};

export const getUserEmail = (rootState: RootState): string => {
    return rootState.user.email;
};

export const getUserIsVerified = (rootState: RootState): boolean => {
    return rootState.user.is_verified;
};

export const getUser = (rootState: RootState): UserState => {
    return rootState.user;
};
