const brandPrimary = '#ef473a';
const brandPrimaryTap = '#e05947';

const themeStyle = {
  color_text_base: '#333333',
  color_text_placeholder: '#cccccc',
  color_text_disabled: 'rgba(0, 0, 0, 0.08)',
  color_text_caption: '#a1afb4',
  color_text_paragraph: '#5d5d5d',
  color_link: '#0c77d3',
  color_shadow: 'rgba(0, 0, 0, .21)',

  fill_body: '#f1f6f8',
  fill_mask: 'rgba(0, 0, 0, 0.65)',
  fill_overlay_inverse: 'rgba(0, 0, 0, 0.7)',

  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#52cd4c',
  brand_error: brandPrimary,
  brand_important: '#ff3b30',

  font_size_heading: 32,

  border_color_base: '#eeeeee',

  button_height: 96,
  button_font_size: 40,
  button_height_sm: 50,
  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,
  ghost_button_color: brandPrimary,
  ghost_button_fill_tap: brandPrimaryTap,

  tabs_color: brandPrimary,
  tabs_height: 70,
  tabs_font_size_heading: 36,

  list_item_height: 96,

  segmented_control_height: 60,

  tag_height: 36,

  link_button_font_size: 36,

  notice_bar_fill: '#f4faff',
  navbar_height: 88,

  radius_xs: 2,
  radius_md: 8,

  h_spacing_sm: 30,
  h_spacing_md: 20,
  h_spacing_lg: 40,

  v_spacing_xs: 8,
  v_spacing_md: 20,
  v_spacing_xl: 40,
};

const style = {
  FILL_BODY: {
    backgroundColor: themeStyle.fill_body,
    height: '100%',
  },
  FILL_SCREEN: {
    width: '100%',
    height: '100%',
  },
  FILL_HEIGHT: {
    height: '100%',
  },
  FILL_WIDTH: {
    width: '100%',
  },
  FILL_LIST_CONTENT: {
    maxWidth: '100%',
    height: '100%',
  },
  LIST_CONTAINER: {
    display: 'flex',
    marginLeft: 0,
    width: '100%',
  },
};

module.exports.style = style;
module.exports.themeStyle = themeStyle;
