import { call, put, takeLatest } from 'redux-saga/effects';
import { getSchedule } from '../../../api';
import { setScheduleData } from './actions';
import { GET_SCHEDULE } from './constant';

export function* getList() {
  try {
    const response = yield call(getSchedule, null);
    yield put(setScheduleData(response));
  } catch (err) {
    console.error('0', err);
  }
}

export default function* getScheduleList() {
  yield takeLatest(GET_SCHEDULE, getList);
}
