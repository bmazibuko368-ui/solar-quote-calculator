// Wait until HTML finishes loading before running JavaScript
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements using their unique HTML IDs
  const billSelect = document.getElementById('monthly-bill');
  const batterySelect = document.getElementById('battery-backup');
  const priceDisplay = document.getElementById('price-display');
  const hiddenEstimate = document.getElementById('hidden-estimate');
  const hiddenBill = document.getElementById('hidden-bill');

  // Calculation Function
  function calculateQuote() {
    // Convert string select value into a number
    const billValue = parseInt(billSelect.value);
    const needsBattery = batterySelect.value === 'yes';

    let total = 0;

    if (billValue === 1500) {
      total = needsBattery ? 45000 : 25000;
    } else if (billValue === 3000) {
      total = needsBattery ? 65000 : 38000;
    } else if (billValue === 5000) {
      total = needsBattery ? 95000 : 55000;
    }

    // Format number as currency (e.g., R 65,000)
    const formattedTotal = 'R ' + total.toLocaleString('en-ZA');

    // Update screen elements
    priceDisplay.textContent = formattedTotal;
    hiddenEstimate.value = formattedTotal;
    hiddenBill.value = billSelect.options[billSelect.selectedIndex].text;
  }

  // Event Listeners: Watch for user changes on form dropdowns
  billSelect.addEventListener('change', calculateQuote);
  batterySelect.addEventListener('change', calculateQuote);

  // Run calculation once immediately when page loads
  calculateQuote();
});
