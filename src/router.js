
import { createNavigatorRouter } from 'react-native-navigator-router';
import routerConfig from './routerConfig';


function router({ history }) {
  return routerConfig(history, createNavigatorRouter());
}

export default router;
