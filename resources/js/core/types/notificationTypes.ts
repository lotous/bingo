export const SET_NOTIFICATION = 'SET_NOTIFICATION';

interface SetNotificationAction {
    type: typeof SET_NOTIFICATION;
    payload: NotificationState;
}

export interface NotificationState {
    message: string;
    status: string;
    show: boolean;
}

export enum NotificationStatus {
    FAIL = 'FAIL',
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    NULL = 'NULL',
}

export type NotificationActionTypes = SetNotificationAction;
