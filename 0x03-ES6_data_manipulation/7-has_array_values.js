function hasValuesFromArray(set, list) {
  return list.every((items) => set.has(items));
}
export default hasValuesFromArray;
