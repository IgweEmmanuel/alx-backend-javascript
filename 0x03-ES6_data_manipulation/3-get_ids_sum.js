function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  return list.reduce((add, list) => add + list.id, 0);
}
export default getStudentIdsSum;
