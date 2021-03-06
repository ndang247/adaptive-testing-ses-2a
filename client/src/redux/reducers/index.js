import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import exams from './exams';
import queries from './queries';
import scores from './scores';

export const reducers = combineReducers({ auth, users, exams, queries, scores });
