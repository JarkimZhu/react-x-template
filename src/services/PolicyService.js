/**
 * Created by zhujiaqi on 2017/4/20.
 */


export default class PolicyService {
  static getPolicyInfo(frameNo) {
    return Promise.resolve({ ResponseMessage: `${frameNo} 查询成功，无对应数据！` });
  }
}
