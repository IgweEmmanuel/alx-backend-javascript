function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);
  if (position < 0 || position > length) {
    return 'Position outside range';
  }
  data.setInt8(position, value);
  return data;
}
export default createInt8TypedArray;
