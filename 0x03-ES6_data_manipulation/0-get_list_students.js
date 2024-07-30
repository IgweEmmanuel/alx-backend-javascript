/**
 * getlistStudetns - This is the function that prints array of objects
 * Return: It returns array of objects
 */
function getListStudents() {
  // returns array objects
  const one = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const two = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const three = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  return [one, two, three];
}

export default getListStudents;
