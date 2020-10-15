import {createSelector} from 'reselect';
import * as auth from '../store/reducers/auth';
import {AppState} from "../store/reducers";

const isAuthorisedSelector=(state:AppState):auth.State=>state.authState;

export const selectIsAuthorized= createSelector(isAuthorisedSelector, (state) => state);