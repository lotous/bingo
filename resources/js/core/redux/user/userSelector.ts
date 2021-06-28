import { RootState } from '../..';

export const getUserName = (rootState: RootState) => {
    return rootState.user.name;
};

export const getUserEmail = (rootState: RootState) => {
    return rootState.user.email;
};

export const getUserIsVerified = (rootState: RootState) => {
    return rootState.user.is_verified;
};

export const getUser = (rootState: RootState) => {
    return rootState.user;
};
