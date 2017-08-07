module.exports = {
  toPixel(pixel) {
    if (typeof pixel === 'number') {
      return `${pixel}px`;
    } else {
      return pixel;
    }
  },
  toDip(pixel) {
    let px = pixel;
    if (!(typeof pixel === 'number')) {
      px = parseFloat(pixel);
    }
    return px / 2;
  },
  toRem(pixel) {
    let px = pixel;
    if (!(typeof pixel === 'number')) {
      px = parseFloat(pixel);
    }
    return `${px / 100}rem`;
  },
};
