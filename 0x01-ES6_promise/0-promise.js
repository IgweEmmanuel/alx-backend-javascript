export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a setTimeout
    setTimeout(() => {
      const success = true; // or some logic to determine success/failure

      if (success) {
        resolve("Success!");
      } 
      else {
        reject("Error!");
      }
    }, 1000);
  });
}
