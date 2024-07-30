function getStudentsByLocation(list, city) {
  if (!Array.isArray(list) || city === 'string') {
    return [];
  }
  return list.filter((items) => items.location === city);
}
export default getStudentsByLocation;
