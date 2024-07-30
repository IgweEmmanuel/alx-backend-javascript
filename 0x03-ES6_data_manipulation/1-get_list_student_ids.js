/**
 * getListStudentIds - function
 * Return: array of objects
 */

function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  return arg.map((items) => items.id);
}
export default getListStudentIds;
