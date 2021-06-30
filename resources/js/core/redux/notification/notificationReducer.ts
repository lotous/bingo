import {
    NotificationActionTypes,
    NotificationState,
    NotificationStatus,
    SET_NOTIFICATION,
} from '../../types/notificationTypes';

export const NOTIFICATION_INITIAL_STATE: NotificationState = {
    message: '',
    status: NotificationStatus.NULL,
    show: false,
};

const notificationReducer = (
    state = NOTIFICATION_INITIAL_STATE,
    action: NotificationActionTypes
): NotificationState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {...action.payload};
        default:
            return state;
    }
};

export default notificationReducer;
