const themeStyle = require('./styles').themeStyle;
const Pixel = require('./Pixel');

module.exports = Object.assign(themeStyle, {
  font_size_heading: Pixel.toDip(themeStyle.font_size_heading),

  button_height: Pixel.toDip(themeStyle.button_height),
  button_font_size: Pixel.toDip(themeStyle.button_font_size),
  button_height_sm: Pixel.toDip(themeStyle.button_height_sm),

  tabs_height: Pixel.toDip(themeStyle.tabs_height),
  tabs_font_size_heading: Pixel.toDip(themeStyle.tabs_font_size_heading),

  list_item_height: Pixel.toDip(themeStyle.list_item_height),
  segmented_control_height: Pixel.toDip(themeStyle.segmented_control_height),
  tag_height: Pixel.toDip(themeStyle.tag_height),
  link_button_font_size: Pixel.toDip(themeStyle.link_button_font_size),

  navbar_height: Pixel.toDip(themeStyle.navbar_height),

  radius_xs: Pixel.toDip(themeStyle.radius_xs),
  radius_md: Pixel.toDip(themeStyle.radius_md),

  h_spacing_sm: Pixel.toDip(themeStyle.h_spacing_sm),
  h_spacing_md: Pixel.toDip(themeStyle.h_spacing_md),
  h_spacing_lg: Pixel.toDip(themeStyle.h_spacing_lg),

  v_spacing_xs: Pixel.toDip(themeStyle.v_spacing_xs),
  v_spacing_md: Pixel.toDip(themeStyle.v_spacing_md),
  v_spacing_xl: Pixel.toDip(themeStyle.v_spacing_xl),
});
