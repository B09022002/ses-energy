<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SES Energy - Save Electricity in India</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to SES Energy</h1>
        <p>Helping India save electricity and reduce power bills.</p>
    </header>
    <main>
        <h2>Energy Savings Calculator (India)</h2>
        <p>Enter your monthly electricity usage (kWh) and cost per unit:</p>
        <input type="number" id="usage" placeholder="e.g. 200">
        <input type="number" id="rate" placeholder="₹ per kWh (default ₹7)" step="0.1" value="7">
        <button onclick="calculateIndianSavings()">Calculate Savings</button>
        <p id="result"></p>

        <h3>Compare Savings with Energy-Efficient Options:</h3>
        <ul>
            <li>💡 Switching to LED bulbs saves <b>30-50%</b> on lighting costs.</li>
            <li>❄️ Using an <b>inverter AC</b> saves <b>20-40%</b> on cooling costs.</li>
            <li>🌞 Installing <b>solar panels</b> can reduce bills by <b>50-90%</b> in sunny regions.</li>
        </ul>

        <button onclick="showMessage()">Click for an Energy Tip</button>
        <p id="message"></p>
    </main>
    <footer>
        <p>© 2024 SES Energy | Made for India 🇮🇳</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>


