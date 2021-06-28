import { SET_USER, UserActionTypes, UserState } from '../../types/userTypes';

export const USER_INITIAL_STATE: UserState = {
    name: '',
    email: '',
    is_verified: false,
    is_github_account: false,
};

const userReducer = (state = USER_INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
