document.addEventListener('DOMContentLoaded', () => {
  let output = document.getElementById('output');

  // Function to create a promise with random resolve time between 1-3 seconds
  function createPromise() {
    return new Promise((resolve) => {
      let time = Math.random() * (3000 - 1000) + 1000;
      setTimeout(() => resolve(time), time);
    });
  }

  // Create promises
  let promise1 = createPromise();
  let promise2 = createPromise();
  let promise3 = createPromise();

  // Wait for all promises to resolve
  Promise.all([promise1, promise2, promise3]).then((times) => {
    // Remove loading row
    output.innerHTML = '';

    // Calculate total time
    let totalTime = times.reduce((a, b) => a + b, 0);

    // Add a row for each promise
    times.forEach((time, index) => {
      let row = output.insertRow();
      let cell1 = row.insertCell();
      let cell2 = row.insertCell();
      cell1.textContent = `Promise ${index + 1}`;
      cell2.textContent = (time / 1000).toFixed(3) + ' seconds';
    });

    // Add row for total time
    let totalRow = output.insertRow();
    let totalCell1 = totalRow.insertCell();
    let totalCell2 = totalRow.insertCell();
    totalCell1.textContent = 'Total';
    totalCell2.textContent = (totalTime / 1000).toFixed(3) + ' seconds';
  });
});