let output = document.getElementById("output");

function createPromise() {
  return new Promise((resolve) => {
    let time = Math.random() * (3000 - 1000) + 1000;
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

Promise.all([promise1, promise2, promise3]).then((time) => {
  let totalTime = time.reduce((a, b) => a + b, 0);

  let table = document.getElementById('myTable');

  // Add rows for each promise
  for (let i = 0; i < time.length; i++) {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    cell1.textContent = 'Promise ' + (i + 1);
    cell2.textContent = (time[i] / 1000).toFixed(3) + ' seconds';
  }

  // Add row for total time
  let totalRow = table.insertRow();
  let totalCell1 = totalRow.insertCell();
  let totalCell2 = totalRow.insertCell();
  totalCell1.textContent = 'Total';
  totalCell2.textContent = (totalTime / 1000).toFixed(3) + ' seconds';
});