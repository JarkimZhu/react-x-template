/**
 * Created by zhujiaqi on 2017/4/20.
 */

import User from './User';
import Policy from './Policy';

export default function registerModels(app) {
  app.model(User);
  app.model(Policy);
}
