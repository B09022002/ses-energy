function showMessage() {
    document.getElementById('message').innerText = "Tip: Switch to LED bulbs to save energy!";
}

function calculateSavings() {
    let usage = document.getElementById('usage').value;
    if (usage === '' || isNaN(usage) || usage <= 0) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }
    let savings = usage * 0.12; // Assuming 12 cents per kWh savings
    document.getElementById('result').innerText = "Estimated savings: $" + savings.toFixed(2) + " per month.";
}

