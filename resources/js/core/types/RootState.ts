import { NotificationState } from './notificationTypes';
import { UserState } from './userTypes';

export interface RootState {
    user: UserState;
    notification: NotificationState;
}
