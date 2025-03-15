function calculateBill() {
    let usage = document.getElementById('usage').value;
    let rate = document.getElementById('state').value;

    if (usage === '' || isNaN(usage) || usage <= 0) {
        document.getElementById('bill-result').innerText = "Enter a valid electricity usage.";
        return;
    }

    let bill = usage * rate;
    document.getElementById('bill-result').innerText = `Your estimated monthly bill: ₹${bill.toFixed(2)}`;
}

function recommendAppliance() {
    let appliance = document.getElementById('appliance').value;
    let resultText = "Suggested model: ";

    if (appliance === "fan") {
        resultText += "5-Star BLDC Ceiling Fan (₹2,500, saves ₹1,200/year)";
    } else if (appliance === "ac") {
        resultText += "5-Star Inverter AC (₹38,000, saves ₹4,000/year)";
    } else if (appliance === "fridge") {
        resultText += "5-Star Refrigerator (₹25,000, saves ₹2,000/year)";
    } else if (appliance === "tv") {
        resultText += "LED Smart TV 5-Star (₹15,000, saves ₹800/year)";
    }

    document.getElementById('appliance-result').innerText = resultText;
}

function calculateSolarSavings() {
    let usage = document.getElementById('solar-usage').value;

    if (usage === '' || isNaN(usage) || usage <= 0) {
        document.getElementById('solar-result').innerText = "Enter a valid electricity usage.";
        return;
    }

    let savings = usage * 7 * 12 * 0.7; // 70% savings per year
    document.getElementById('solar-result').innerText = `Solar can save you ₹${savings.toFixed(2)} per year!`;
}

function checkPowerStatus() {
    document.getElementById('power-status').innerText = "Fetching power status... (Feature coming soon)";
}
