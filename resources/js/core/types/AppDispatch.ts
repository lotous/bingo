import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './RootState';

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
