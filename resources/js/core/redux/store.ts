import {
    createStore,
    Store,
    AnyAction,
    applyMiddleware,
    combineReducers,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { RootState } from '..';
import userReducer from './user/userReducer';
import notificationReducer from './notification/notificationReducer';

export const store: Store<RootState, AnyAction> = createStore(
    combineReducers( {
        user: userReducer,
        notification: notificationReducer,
    } ),
    composeWithDevTools( applyMiddleware( thunk ) )
);
