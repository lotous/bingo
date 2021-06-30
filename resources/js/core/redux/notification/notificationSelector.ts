import { RootState } from '../..';
import { NotificationState } from '../..';

export const getNotification = ( rootState: RootState ): NotificationState => {
    return rootState.notification;
};
