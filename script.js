function showMessage() {
    document.getElementById('message').innerText = "Tip: Use LED bulbs and switch off appliances when not in use!";
}

function calculateIndianSavings() {
    let usage = document.getElementById('usage').value;
    let rate = document.getElementById('rate').value;

    if (usage === '' || isNaN(usage) || usage <= 0 || rate === '' || isNaN(rate) || rate <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    let current_cost = usage * rate;
    let led_savings = current_cost * 0.4;  // LED saves 40% on lighting costs
    let ac_savings = current_cost * 0.3;   // Inverter AC saves 30%
    let solar_savings = current_cost * 0.7; // Solar can reduce up to 70%

    document.getElementById('result').innerHTML = `
        💰 Your current monthly bill: ₹${current_cost.toFixed(2)} <br>
        🔋 Savings with LED bulbs: ₹${led_savings.toFixed(2)} <br>
        ❄️ Savings with Inverter AC: ₹${ac_savings.toFixed(2)} <br>
        🌞 Savings with Solar Power: ₹${solar_savings.toFixed(2)}
    `;
}


