document.addEventListener("DOMContentLoaded", function () {
  const clientName = document.getElementById("claimant_name");
  const clientClinic = document.getElementById("clinic_name");
  const invNum = document.getElementById("invoice_number");

  const qtyAB1 = document.getElementById("qty_ab1");
  const priceAB1 = document.getElementById("price_ab1");

  const qtyAB2 = document.getElementById("qty_ab2");
  const priceAB2 = document.getElementById("price_ab2");

  const qtyAB4 = document.getElementById("qty_ab4");
  const priceAB4 = document.getElementById("price_ab4");

  const qty83PT = document.getElementById("qty_83PT");
  const price83PT = document.getElementById("price_83PT");
  const dateField83PT = document.getElementById("date_83PT");

  const qty41PT = document.getElementById("qty_41PT");
  const price41PT = document.getElementById("price_41PT");
  const dateField41PT = document.getElementById("date_41PT");

  const qty83CT = document.getElementById("qty_83CT");
  const price83CT = document.getElementById("price_83CT");
  const dateField83CT = document.getElementById("date_83CT");

  const qty41CT = document.getElementById("qty_41CT");
  const price41CT = document.getElementById("price_41CT");
  const dateField41CT = document.getElementById("date_41CT");

  const totalValueElement = document.getElementById("total_value");
  const totalQuantityElement = document.getElementById("total_quantity");
  const selectedItemsContainer = document.getElementById("selected_items");
  // Function to calculate the total price and quantity
  function calculateTotal() {
    const anyItemSelected =
      parseFloat(qtyAB1.value) > 0 ||
      parseFloat(qtyAB2.value) > 0 ||
      parseFloat(qtyAB4.value) > 0 ||
      parseFloat(qty83PT.value) > 0 ||
      parseFloat(qty41PT.value) > 0 ||
      parseFloat(qty83CT.value) > 0 ||
      parseFloat(qty41CT.value) > 0;
    const itemQuantities = [
      parseFloat(qty83PT.value),
      parseFloat(qty41PT.value),
      parseFloat(qty83CT.value),
      parseFloat(qty41CT.value),
    ];
    const itemPrices = [
      parseFloat(priceAB1.value),
      parseFloat(priceAB2.value),
      parseFloat(priceAB4.value),
      parseFloat(price83PT.value),
      parseFloat(price41PT.value),
      parseFloat(price83CT.value),
      parseFloat(price41CT.value),
    ];
    const totalQty = itemQuantities.reduce((acc, qty) => acc + qty, 0);

    const totalPrice = itemPrices.reduce((acc, price) => acc + price, 0);
    // const totalQty = itemQuantities.reduce((acc, qty) => acc + qty, 0);
    // Hide "Total Quantity" if totalQty is 0
    if (anyItemSelected > 0) {
      const totalQuantityDisplay = document.createElement("p");
      totalQuantityDisplay.innerText = ` DTPR ${totalQty}/21 | Supplies:$ | Used by`;
      selectedItemsContainer.appendChild(totalQuantityDisplay);
    }
    totalValueElement.innerText = totalPrice.toFixed(2);
    // totalQuantity.innerText = totalQty.toFixed(2);
  }

  // Function to update the displayed item price and quantity
  function updateDisplay(item, qtyInput, priceInput) {
    const qtyValue = parseFloat(qtyInput.value);
    const priceValue = parseFloat(priceInput.value);

    if (qtyValue > 0) {
      item.style.display = "block";
      item.innerHTML = `${qtyValue} ${
        qtyValue === 1 ? "item" : "items"
      } @ $${priceValue.toFixed(2)}`;
    } else {
      item.style.display = "none";
    }

    calculateTotal();
    displaySelectedItems();
  }

  // Function to display selected items
  function displaySelectedItems() {
    selectedItemsContainer.innerHTML = "";

    // Calculate total value
    const totalValue = parseFloat(totalValueElement.innerText);
    const totalValueDisplay = document.createElement("p");

    const clientName = document.getElementById("claimant_name").value;
    const invNum = document.getElementById("invoice_number").value;
    const clientClinic = document.getElementById("clinic_name").value;
    totalValueDisplay.innerText = `Claimant: ${clientName} \n Paid Inv. ${invNum} to ${clientClinic} for $${totalValue.toFixed(
      2
    )}`;
    selectedItemsContainer.appendChild(totalValueDisplay);

    /* AB Items Display */
    function addABItemToDisplay(itemName, qtyValue, priceValue) {
      const itemDisplay = document.createElement("p");
      itemDisplay.innerText = `${qtyValue} ${itemName}`;
      selectedItemsContainer.appendChild(itemDisplay);
    }

    /* Fixed Value Items Display */
    function addItemToDisplay(itemName, qtyValue, priceValue, dateValue) {
      const itemDisplay = document.createElement("p");
      itemDisplay.innerText = `${qtyValue} ${itemName} - Date: ${dateValue}`;
      selectedItemsContainer.appendChild(itemDisplay);
    }

    const qtyAB1Value = parseFloat(qtyAB1.value);
    const priceAB1Value = parseFloat(priceAB1.value);
    if (qtyAB1Value > 0) {
      addABItemToDisplay("AB1 @ $117", qtyAB1Value, priceAB1Value);
    }

    const qtyAB2Value = parseFloat(qtyAB2.value);
    const priceAB2Value = parseFloat(priceAB2.value);
    if (qtyAB2Value > 0) {
      addABItemToDisplay("AB2 @ $50", qtyAB2Value, priceAB2Value);
    }

    const qtyAB4Value = parseFloat(qtyAB4.value);
    const priceAB4Value = parseFloat(priceAB4.value);
    if (qtyAB4Value > 0) {
      addABItemToDisplay("AB4 @ $40", qtyAB4Value, priceAB4Value);
    }

    // Get values of selected items
    const qty83PTValue = parseFloat(qty83PT.value);
    const price83PTValue = parseFloat(price83PT.value);
    const date83PTValue = document.getElementById("date_83PT").value;
    if (qty83PTValue > 0) {
      addItemToDisplay(
        "PT @ $83 Each",
        qty83PTValue,
        price83PTValue,
        date83PTValue
      );
    }

    const qty41PTValue = parseFloat(qty41PT.value);
    const price41PTValue = parseFloat(price41PT.value);
    const date41PTValue = document.getElementById("date_41PT").value;
    if (qty41PTValue > 0) {
      addItemToDisplay(
        "PT @ $41 Each",
        qty41PTValue,
        price41PTValue,
        date41PTValue
      );
    }

    // Get values of selected items
    const qty83CTValue = parseFloat(qty83CT.value);
    const price83CTValue = parseFloat(price83CT.value);
    const date83CTValue = document.getElementById("date_83CT").value;
    if (qty83CTValue > 0) {
      addItemToDisplay(
        "CT @ $83 Each",
        qty83CTValue,
        price83CTValue,
        date83CTValue
      );
    }

    const qty41CTValue = parseFloat(qty41CT.value);
    const price41CTValue = parseFloat(price41CT.value);
    const date41CTValue = document.getElementById("date_41CT").value;
    if (qty41CTValue > 0) {
      addItemToDisplay(
        "CT @ $41 Each",
        qty41CTValue,
        price41CTValue,
        date41CTValue
      );
    }

    // Call calculateTotal to update the total price in the display box
    calculateTotal();
  }

  clientName.addEventListener("input", function () {
    displaySelectedItems();
  });
  clientClinic.addEventListener("input", function () {
    displaySelectedItems();
  });
  invNum.addEventListener("input", function () {
    displaySelectedItems();
  });

  // Event listeners to update prices and quantities when quantity inputs change
  qtyAB1.addEventListener("input", function () {
    priceAB1.value = (qtyAB1.value * 117).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qtyAB2.addEventListener("input", function () {
    priceAB2.value = (qtyAB2.value * 50).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qtyAB4.addEventListener("input", function () {
    priceAB4.value = (qtyAB4.value * 40).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qty83PT.addEventListener("input", function () {
    price83PT.value = (qty83PT.value * 83).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qty41PT.addEventListener("input", function () {
    price41PT.value = (qty41PT.value * 41).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qty83CT.addEventListener("input", function () {
    price83CT.value = (qty83CT.value * 83).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  qty41CT.addEventListener("input", function () {
    price41CT.value = (qty41CT.value * 41).toFixed(2);
    calculateTotal();
    displaySelectedItems();
    x;
  });
  dateField83PT.addEventListener("input", function () {
    displaySelectedItems();
  });
  dateField41PT.addEventListener("input", function () {
    displaySelectedItems();
  });
  dateField83CT.addEventListener("input", function () {
    displaySelectedItems();
  });
  dateField41CT.addEventListener("input", function () {
    displaySelectedItems();
  });
  // Initial calculation on page load
  calculateTotal();
});
