import dva from 'dva';
import './index.css';

import registerModels from './models/index';

// 1. Initialize
const app = dva({
  // onError(e) {
  //   console.log('onError', e);
  // },
});

// 2. Plugins
// app.use({});

// 3. Model
registerModels(app);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
