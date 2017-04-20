/**
 * Created by zhujiaqi on 2017/4/19.
 */

import { routerRedux } from 'dva/router';
import UserService from '../services/UserService';

export default {
  namespace: 'user',
  state: {
    mobile: null,
    vCode: null,
    isLogin: false,
  },
  reducers: {
    save(state, { payload }) {
      if (payload.mobile) {
        return { ...state, mobile: payload.mobile.value };
      } else if (payload.vCode) {
        return { ...state, vCode: payload.vCode.value };
      }
    },
    signUp(state) {
      return { ...state, isLogin: true };
    },
  },
  effects: {
    *login(action, { call, put, select }) {
      const user = yield select(state => state.user);
      yield call(UserService.login, user);
      yield put({ type: 'signUp' });
      yield put(routerRedux.push('/policy'));
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/users') {
    //       dispatch({ type: 'fetch', payload: query });
    //     }
    //   });
    // },
  },
};
