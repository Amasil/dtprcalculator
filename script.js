document.addEventListener("DOMContentLoaded", function () {
  const qtyAB1 = document.getElementById("qty_ab1");
  const priceAB1 = document.getElementById("price_ab1");
  const qtyAB2 = document.getElementById("qty_ab2");
  const priceAB2 = document.getElementById("price_ab2");
  const qtyAB4 = document.getElementById("qty_ab4");
  const priceAB4 = document.getElementById("price_ab4");

  const qty83PT = document.getElementById("qty_83PT");
  const price83PT = document.getElementById("price_83PT");
  const qty41PT = document.getElementById("qty_41PT");
  const price41PT = document.getElementById("price_41PT");

  const qty83CT = document.getElementById("qty_83CT");
  const price83CT = document.getElementById("price_83CT");
  const qty41CT = document.getElementById("qty_41CT");
  const price41CT = document.getElementById("price_41CT");

  const totalValue = document.getElementById("total_value");

  // Function to calculate the total price
  function calculateTotal() {
    const total =
      parseFloat(priceAB1.value) +
      parseFloat(priceAB2.value) +
      parseFloat(priceAB4.value) +
      parseFloat(price83PT.value) +
      parseFloat(price41PT.value) +
      parseFloat(price83CT.value) +
      parseFloat(price41CT.value);

    totalValue.innerText = total.toFixed(2);
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
    const selectedItemsContainer = document.getElementById("selected_items");
    selectedItemsContainer.innerHTML = "";

    // Function to add an item to the display box
    function addItemToDisplay(itemName, qtyValue, priceValue) {
      const itemDisplay = document.createElement("p");
      itemDisplay.innerText = `${qtyValue} ${itemName} @ $${priceValue.toFixed(
        2
      )}`;
      selectedItemsContainer.appendChild(itemDisplay);
    }

    const qtyAB1Value = parseFloat(qtyAB1.value);
    const priceAB1Value = parseFloat(priceAB1.value);
    if (qtyAB1Value > 0) {
      addItemToDisplay("AB1 ", qtyAB1Value, priceAB1Value);
    }

    const qtyAB2Value = parseFloat(qtyAB2.value);
    const priceAB2Value = parseFloat(priceAB2.value);
    if (qtyAB2Value > 0) {
      addItemToDisplay("AB2 ", qtyAB2Value, priceAB2Value);
    }

    const qtyAB4Value = parseFloat(qtyAB4.value);
    const priceAB4Value = parseFloat(priceAB4.value);
    if (qtyAB4Value > 0) {
      addItemToDisplay("AB4 ", qtyAB4Value, priceAB4Value);
    }

    // Get values of selected items
    const qty83PTValue = parseFloat(qty83PT.value);
    const price83PTValue = parseFloat(price83PT.value);
    if (qty83PTValue > 0) {
      addItemToDisplay("PT @ $83 Each", qty83PTValue, price83PTValue);
    }

    const qty41PTValue = parseFloat(qty41PT.value);
    const price41PTValue = parseFloat(price41PT.value);
    if (qty41PTValue > 0) {
      addItemToDisplay("PT @ $41 Each", qty41PTValue, price41PTValue);
    }

    // Get values of selected items
    const qty83CTValue = parseFloat(qty83CT.value);
    const price83CTValue = parseFloat(price83CT.value);
    if (qty83CTValue > 0) {
      addItemToDisplay("CT @ $83 Each", qty83CTValue, price83CTValue);
    }

    const qty41CTValue = parseFloat(qty41CT.value);
    const price41CTValue = parseFloat(price41CT.value);
    if (qty41CTValue > 0) {
      addItemToDisplay("CT @ $41 Each", qty41CTValue, price41CTValue);
    }
    // Add other selected items here...

    // Call calculateTotal to update the total price in the display box
    calculateTotal();
  }

  // Event listeners to update prices when quantity inputs change
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
    displaySelectedItems(); // Update display box
  });
  // Displayed item elements for 83PT and 41PT
  const itemAB1 = document.getElementById("item_ab1");
  const itemAB2 = document.getElementById("item_ab2");
  const itemAB4 = document.getElementById("item_ab4");
  const item83PT = document.getElementById("item_83PT");
  const item41PT = document.getElementById("item_41PT");
  const item83CT = document.getElementById("item_83CT");
  const item41CT = document.getElementById("item_41CT");
});
