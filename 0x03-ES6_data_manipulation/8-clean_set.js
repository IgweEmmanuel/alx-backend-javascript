function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const resultArray = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      resultArray.push(value.slice(startString.length));
    }
  }

  return resultArray.join('-');
}
export default cleanSet;
