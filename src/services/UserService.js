/**
 * Created by zhujiaqi on 2017/4/19.
 */
export default class UserService {
  static login(user) {
    console.log(user);
    return Promise.resolve('hehe');
  }
}
