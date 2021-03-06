import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import ACTION from '../common/action_constants.js';
import { getDataWithToken } from '../../utils/ajax';
import Api from '../common/api_config';
import {getCookie} from '../common/cookie';

function* home(action) {
    const url = action.data ? action.data : getCookie('username');
    const data1 = yield call(getDataWithToken, Api.getUser + url);
    let user = JSON.parse(data1.body);
    let data = [];
    data.push(user);
    console.log(data);
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}

export {
    home
};