import ClassRoom from './0-classroom.js'

export default const initializeRooms = () => {
  const result = [];
  result.push(new ClassRoom(19));
  result.push(new ClassRoom(20));
  result.push(new ClassRoom(34));

  return result;
}
