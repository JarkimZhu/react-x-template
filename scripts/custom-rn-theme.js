const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default');
const customVars = require('../src/theme/theme.js');

const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');

const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  const script = `var brandPrimary="${customVars.brand_primary}";var brandPrimaryTap="${customVars.brand_primary_tap}";module.exports = ${JSON.stringify(themeVars)}`;
  fs.writeFileSync(themePath, script);
}
