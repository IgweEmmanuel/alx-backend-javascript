// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the given endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // If the count reaches or exceeds 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
