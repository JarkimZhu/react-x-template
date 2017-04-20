/**
 * Created by zhujiaqi on 2017/4/20.
 */

import PolicyService from '../services/PolicyService';

export default {
  namespace: 'policy',
  state: {
    frameNo: null,
    policyInfo: null,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, frameNo: payload.frameNo.value };
    },
    setPolicyInfo(state, { payload: { policyInfo } }) {
      return { ...state, policyInfo };
    },
  },
  effects: {
    *getPolicyInfo(action, { call, put, select }) {
      const frameNo = yield select(state => state.policy.frameNo);
      const rsp = yield call(PolicyService.getPolicyInfo, frameNo);
      yield put({ type: 'setPolicyInfo', payload: { policyInfo: rsp.ResponseMessage } });
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/policy') {
    //       dispatch({ type: 'getPolicyInfo', payload: query });
    //     }
    //   });
    // },
  },
};
