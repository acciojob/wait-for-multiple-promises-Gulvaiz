// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(id) {
    return new Promise((resolve) => {
        const timeTaken = (Math.random() * 2 + 1).toFixed(3);  // Time between 1 and 3 seconds, rounded to 3 decimal places
        setTimeout(() => {
            resolve({ id: `Promise ${id}`, time: parseFloat(timeTaken) });
        }, timeTaken * 1000); // Convert to milliseconds
    });
}

// Create an array of promises
const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3),
];

const outputElement = document.getElementById('output');
const loadingRow = document.getElementById('loading');

// Using Promise.all to wait for all promises to resolve
Promise.all(promises).then((results) => {
    // Check if the loading row exists before trying to remove it
    if (loadingRow) {
        outputElement.removeChild(loadingRow);
    }

    // Variable to track total time
    let totalTime = 0;

    // Populate the table with the results of each promise
    results.forEach((result) => {
        totalTime += result.time;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.id}</td>
            <td>${result.time}</td>
        `;
        outputElement.appendChild(row);
    });

    // Add the total time row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
    `;
    outputElement.appendChild(totalRow);
});
