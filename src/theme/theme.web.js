const themeStyle = require('./styles').themeStyle;
const Pixel = require('./Pixel');

const theme = {
  'color-text-base': themeStyle.color_text_base,
  'color-text-placeholder': themeStyle.color_text_placeholder,
  'color-text-disabled': themeStyle.color_text_disabled,
  'color-text-caption': themeStyle.color_text_caption,
  'color-text-paragraph': themeStyle.color_text_paragraph,
  'color-link': themeStyle.color_link,
  'color-shadow': themeStyle.color_shadow,

  // 背景色
  'fill-body': themeStyle.fill_body,
  'fill-mask': themeStyle.fill_mask,
  'fill-overlay-inverse': themeStyle.fill_overlay_inverse,

  // 全局/品牌色
  'brand-primary': themeStyle.brand_primary,
  'brand-primary-tap': themeStyle.brand_primary_tap,
  'brand-success': themeStyle.brand_success,
  'brand-error': themeStyle.brand_error,
  'brand-important': themeStyle.brand_important,

  'border-color-base': themeStyle.border_color_base,

  'button-height': Pixel.toPixel(themeStyle.button_height),
  'button-font-size': Pixel.toPixel(themeStyle.button_font_size),
  'button-height-sm': Pixel.toPixel(themeStyle.button_height_sm),

  'tabs-height': Pixel.toPixel(themeStyle.tabs_height),
  'tabs-font-size-heading': Pixel.toPixel(themeStyle.tabs_font_size_heading),

  'list-item-height': Pixel.toPixel(themeStyle.list_item_height),
  'segmented-control-height': Pixel.toPixel(themeStyle.segmented_control_height),
  'tag-height': Pixel.toPixel(themeStyle.tag_height),

  'font-size-heading': Pixel.toPixel(themeStyle.font_size_heading),

  'link-button-font-size': Pixel.toPixel(themeStyle.link_button_font_size),

  'radius-xs': Pixel.toPixel(themeStyle.radius_xs),
  'radius-md': Pixel.toPixel(themeStyle.radius_md),

  'h-spacing-sm': Pixel.toPixel(themeStyle.h_spacing_sm),
  'h-spacing-md': Pixel.toPixel(themeStyle.h_spacing_md),
  'h-spacing-lg': Pixel.toPixel(themeStyle.h_spacing_lg),

  'v-spacing-xs': Pixel.toPixel(themeStyle.v_spacing_xs),
  'v-spacing-md': Pixel.toPixel(themeStyle.v_spacing_md),
  'v-spacing-xl': Pixel.toPixel(themeStyle.v_spacing_xl),

  'notice-bar-fill': themeStyle.notice_bar_fill,
  'navbar-height': Pixel.toPixel(themeStyle.navbar_height),
};

module.exports = () => {
  return theme;
};
