import {StickyNoteState} from '@shared/interfaces/stickynote.interface';
import {combineReducers} from 'redux';
import CoreReducer, {ICoreState} from './core.reducer';
import asyncSessionStorage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import stickynoteReducer from './stickynote.reducer';

export interface IAppState {
    core: ICoreState;
    note: StickyNoteState;
}

const stickyNoteConfig = {
    key: 'note',
    storage: asyncSessionStorage,
    whitelist: ['note'],
};

const reducers = combineReducers({
    core: CoreReducer,
    note: persistReducer(stickyNoteConfig, stickynoteReducer),
});

export default reducers;
