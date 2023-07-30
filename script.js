document.addEventListener("DOMContentLoaded", function () {
  const clientName = document.getElementById("claimant-name");
  const clientClinic = document.getElementById("clinic-name");
  const invNum = document.getElementById("invoice-number");

  const wad = document.getElementById("wad-select");
  const dateOfLoss = document.getElementById("dol");
  const qtyPrevious = document.getElementById("previous-Tx");
  const suppliesPrevious = document.getElementById("previous-Supplies");
  const previousOtPsyc = document.getElementById("previous-OtPsyc");

  const qtyAB1 = document.getElementById("qty-ab1");
  const priceAB1 = document.getElementById("price-ab1");

  const qtyAB2 = document.getElementById("qty-ab2");
  const priceAB2 = document.getElementById("price-ab2");

  const qtyAB4 = document.getElementById("qty-ab4");
  const priceAB4 = document.getElementById("price-ab4");

  const qty83PT = document.getElementById("qty-83PT");
  const price83PT = document.getElementById("price-83PT");
  const dateField83PT = document.getElementById("date-83PT");

  const qty41PT = document.getElementById("qty-41PT");
  const price41PT = document.getElementById("price-41PT");
  const dateField41PT = document.getElementById("date-41PT");

  const qty83CT = document.getElementById("qty-83CT");
  const price83CT = document.getElementById("price-83CT");
  const dateField83CT = document.getElementById("date-83CT");

  const qty41CT = document.getElementById("qty-41CT");
  const price41CT = document.getElementById("price-41CT");
  const dateField41CT = document.getElementById("date-41CT");

  const qty90MT = document.getElementById("qty-90MT");
  const price90MT = document.getElementById("price-90MT");
  const dateField90MT = document.getElementById("date-90MT");

  const qtyMTAny1 = document.getElementById("qty-Any1MT");
  const priceMTAny1 = document.getElementById("price-Any1MT");
  const dateFieldMTAny1 = document.getElementById("date-Any1MT");
  const displayAny1MT = document.getElementById("display-price-Any1MT");

  const qtyMTAny2 = document.getElementById("qty-Any2MT");
  const priceMTAny2 = document.getElementById("price-Any2MT");
  const dateFieldMTAny2 = document.getElementById("date-Any2MT");
  const displayAny2MT = document.getElementById("display-price-Any2MT");

  const qtyAcut = document.getElementById("qty-Acut");
  const priceAcut = document.getElementById("price-Acut");
  const dateFieldAcut = document.getElementById("date-Acut");
  const displayAcut = document.getElementById("display-price-Acut");

  const qtyOtax = document.getElementById("qty-Otax");
  const priceOtax = document.getElementById("price-Otax");
  const dateFieldOtax = document.getElementById("date-Otax");
  const displayOtax = document.getElementById("display-price-Otax");

  const qtyOtTx = document.getElementById("qty-Ottx");
  const priceOtTx = document.getElementById("price-Ottx");
  const dateFieldOtTx = document.getElementById("date-Ottx");
  const displayOtTx = document.getElementById("display-price-Ottx");

  const qtyPsycAx = document.getElementById("qty-Psycax");
  const pricePsycAx = document.getElementById("price-Psycax");
  const dateFieldPsycAx = document.getElementById("date-Psycax");
  const displayPsycAx = document.getElementById("display-price-psycax");

  const qtyPsycTx = document.getElementById("qty-Psyctx");
  const pricePsycTx = document.getElementById("price-Psyctx");
  const dateFieldPsycTx = document.getElementById("date-Psyctx");
  const displayPsycTx = document.getElementById("display-price-psyctx");

  const qtyDental = document.getElementById("qty-Dental");
  const priceDental = document.getElementById("price-Dental");
  const dateFieldDental = document.getElementById("date-Dental");
  const displayDental = document.getElementById("display-price-Dental");

  const totalValueElement = document.getElementById("total-value");
  const totalQuantityElement = document.getElementById("total-quantity");
  const selectedItemsContainer = document.getElementById("selected-items");

  const physioSubTotalElement = document.getElementById("physio-Subtotal");
  const mtsubtotalElement = document.getElementById("mt-Subtotal");
  const ctsubtotalElement = document.getElementById("ct-Subtotal");
  const acutSubtotalElement = document.getElementById("acut-Subtotal");
  const otSubtotalElement = document.getElementById("ot-Subtotal");
  const psycSubtotalElement = document.getElementById("psyc-Subtotal");
  const dentalSubtotalElement = document.getElementById("dental-Subtotal");

  // New variable to keep track of whether both qty and price are entered for "MT Any1"
  let AnyMT1Price = 0;
  let AnyMT2Price = 0;
  let AnyAcutPrice = 0;
  let suppliePrice = 0;
  let OtPrice = 0;
  let PsycPrice = 0;
  let dtprLimit = 0;

  // Function to calculate the total price and quantity
  function calculateTotal() {
    const anyItemSelected =
      parseFloat(qtyAB1.value) > 0 ||
      parseFloat(qtyAB2.value) > 0 ||
      parseFloat(qtyAB4.value) > 0 ||
      parseFloat(qty83PT.value) > 0 ||
      parseFloat(qty41PT.value) > 0 ||
      parseFloat(qty83CT.value) > 0 ||
      parseFloat(qty41CT.value) > 0 ||
      parseFloat(qty90MT.value) > 0 ||
      parseFloat(qtyMTAny1.value) > 0 ||
      parseFloat(qtyMTAny2.value) > 0 ||
      parseFloat(qtyAcut.value) > 0 ||
      parseFloat(qtyOtax.value) > 0 ||
      parseFloat(qtyOtTx.value) > 0 ||
      parseFloat(qtyPsycAx.value) > 0 ||
      parseFloat(qtyPsycTx.value) > 0 ||
      parseFloat(qtyDental.value) > 0;

    const itemQuantities = [
      parseFloat(qty83PT.value),
      parseFloat(qty41PT.value),
      parseFloat(qty83CT.value),
      parseFloat(qty41CT.value),
      parseFloat(qty90MT.value),
      parseFloat(qtyMTAny1.value),
      parseFloat(qtyMTAny2.value),
      parseFloat(qtyAcut.value),
    ];

    const itemQuantitieswithPrevious = [
      parseFloat(qtyPrevious.value),
      parseFloat(qty83PT.value),
      parseFloat(qty41PT.value),
      parseFloat(qty83CT.value),
      parseFloat(qty41CT.value),
      parseFloat(qty90MT.value),
      parseFloat(qtyMTAny1.value),
      parseFloat(qtyMTAny2.value),
      parseFloat(qtyAcut.value),
    ];

    const itemPrices = [
      parseFloat(priceAB1.value),
      parseFloat(priceAB2.value),
      parseFloat(priceAB4.value),
      parseFloat(price83PT.value),
      parseFloat(price41PT.value),
      parseFloat(price83CT.value),
      parseFloat(price41CT.value),
      parseFloat(price90MT.value),
      parseFloat(AnyMT1Price),
      parseFloat(AnyMT2Price),
      parseFloat(AnyAcutPrice),
      parseFloat(priceOtax.value),
      parseFloat(priceOtTx.value),
      parseFloat(pricePsycAx.value),
      parseFloat(pricePsycTx.value),
      parseFloat(priceDental.value),
    ];

    const physioSubTotal = [
      parseFloat(priceAB1.value),
      parseFloat(priceAB2.value),
      parseFloat(priceAB4.value),
      parseFloat(price83PT.value),
      parseFloat(price41PT.value),
    ];

    const mtSubTotal = [
      parseFloat(price90MT.value),
      parseFloat(AnyMT1Price),
      parseFloat(AnyMT2Price),
    ];
    const ctSubTotal = [
      parseFloat(price83CT.value),
      parseFloat(price41CT.value),
    ];
    const acutSubTotal = [parseFloat(AnyAcutPrice)];

    const otSubTotal = [
      parseFloat(priceOtax.value),
      parseFloat(priceOtTx.value),
    ];

    const psycSubTotal = [
      parseFloat(pricePsycAx.value),
      parseFloat(pricePsycTx.value),
    ];

    const dentalSubTotal = [parseFloat(priceDental.value)];

    const supplietotal = [parseFloat(suppliesPrevious.value)];

    const totalQty = itemQuantities.reduce((acc, qty) => acc + qty, 0);
    const totalSupplies = supplietotal.reduce((acc, qty) => acc + qty, 0);
    const totalQtywithPrevious = itemQuantitieswithPrevious.reduce(
      (acc, qty) => acc + qty,
      0
    );
    const totalPrice = itemPrices.reduce((acc, price) => acc + price, 0);
    const totalPhysioSubTotal = physioSubTotal.reduce(
      (acc, qty) => acc + qty,
      0
    );
    const totalMTSubTotal = mtSubTotal.reduce((acc, qty) => acc + qty, 0);
    const totalCTSubTotal = ctSubTotal.reduce((acc, qty) => acc + qty, 0);
    const acutSubtotal = acutSubTotal.reduce((acc, qty) => acc + qty, 0);
    const otSubtotal = otSubTotal.reduce((acc, qty) => acc + qty, 0);
    const psycSubtotal = psycSubTotal.reduce((acc, qty) => acc + qty, 0);
    const dentalSubtotal = dentalSubTotal.reduce((acc, qty) => acc + qty, 0);

    // Hide "Total Quantity" if totalQty is 0

    if (wad.value == "Wad 1") {
      if (anyItemSelected > 0) {
        const totalQuantityDisplay = document.createElement("p");
        totalQuantityDisplay.innerText = ` DTPR ${totalQtywithPrevious}/10 | Supplies:$${totalSupplies}/120.00 | Used by ${dtprLimit}`;
        selectedItemsContainer.appendChild(totalQuantityDisplay);
      }
    } else if (wad.value == "Wad 2") {
      if (anyItemSelected > 0) {
        const totalQuantityDisplay = document.createElement("p");
        totalQuantityDisplay.innerText = ` DTPR ${totalQtywithPrevious}/21 | Supplies:$${totalSupplies}/160.00 | Used by ${dtprLimit}`;
        selectedItemsContainer.appendChild(totalQuantityDisplay);
      }
    }

    totalValueElement.innerText = totalPrice.toFixed(2);
    totalQuantityElement.value = totalQty;

    physioSubTotalElement.value = totalPhysioSubTotal.toFixed(2);
    mtsubtotalElement.value = totalMTSubTotal.toFixed(2);
    ctsubtotalElement.value = totalCTSubTotal.toFixed(2);
    acutSubtotalElement.value = acutSubtotal.toFixed(2);
    otSubtotalElement.value = otSubtotal.toFixed(2);
    psycSubtotalElement.value = psycSubtotal.toFixed(2);
    dentalSubtotalElement.value = dentalSubtotal.toFixed(2);
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
    const clientName = document.getElementById("claimant-name").value;
    const invNum = document.getElementById("invoice-number").value;
    const clientClinic = document.getElementById("clinic-name").value;
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

    /* Fixed Value Items Display */
    function addAnyValueItemToDisplay(
      itemName,
      qtyValue,
      priceValue,
      dateValue
    ) {
      const itemDisplay = document.createElement("p");
      itemDisplay.innerText = `${qtyValue} ${itemName} $${priceValue} Each - Date: ${dateValue}`;
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
    const date83PTValue = document.getElementById("date-83PT").value;
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
    const date41PTValue = document.getElementById("date-41PT").value;
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
    const date83CTValue = document.getElementById("date-83CT").value;
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
    const date41CTValue = document.getElementById("date-41CT").value;
    if (qty41CTValue > 0) {
      addItemToDisplay(
        "CT @ $41 Each",
        qty41CTValue,
        price41CTValue,
        date41CTValue
      );
    }

    const qty90MTValue = parseFloat(qty90MT.value);
    const price90MTValue = parseFloat(price90MT.value);
    const date90MTValue = document.getElementById("date-90MT").value;
    if (qty90MTValue > 0) {
      addItemToDisplay(
        "MT @ $90 Each",
        qty90MTValue,
        price90MTValue,
        date90MTValue
      );
    }

    const qtyMTAny1Value = parseFloat(qtyMTAny1.value);
    const priceMTAny1Value = parseFloat(priceMTAny1.value);
    const dateMTAny1Value = document.getElementById("date-Any1MT").value;
    if (qtyMTAny1Value > 0) {
      addAnyValueItemToDisplay(
        "MT @ ",
        qtyMTAny1Value,
        priceMTAny1Value,
        dateMTAny1Value
      );
    }

    const qtyMTAny2Value = parseFloat(qtyMTAny2.value);
    const priceMTAny2Value = parseFloat(priceMTAny2.value);
    const dateMTAny2Value = document.getElementById("date-Any2MT").value;
    if (qtyMTAny2Value > 0) {
      addAnyValueItemToDisplay(
        "MT @ ",
        qtyMTAny2Value,
        priceMTAny2Value,
        dateMTAny2Value
      );
    }

    const qtyAcutValue = parseFloat(qtyAcut.value);
    const priceAcutValue = parseFloat(priceAcut.value);
    const dateAcutValue = document.getElementById("date-Acut").value;
    if (qtyAcutValue > 0) {
      addAnyValueItemToDisplay(
        "Acut @ ",
        qtyAcutValue,
        priceAcutValue,
        dateAcutValue
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

  wad.addEventListener("change", function () {
    displaySelectedItems();
  });

  dol.addEventListener("input", function () {
    const daysToAdd = 90;
    const dolDate = new Date(dol.value);
    const dtprLimitDate = new Date(
      dolDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
    );

    const options = { day: "numeric", month: "long", year: "numeric" };
    const dtprLimitFormatted = dtprLimitDate.toLocaleDateString(
      "en-US",
      options
    );
    dtprLimit = dtprLimitFormatted;

    displaySelectedItems();
  });

  qtyPrevious.addEventListener("input", function () {
    displaySelectedItems();
  });

  suppliesPrevious.addEventListener("input", function () {
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

  dateField83PT.addEventListener("input", function () {
    displaySelectedItems();
  });

  qty41PT.addEventListener("input", function () {
    price41PT.value = (qty41PT.value * 41).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  dateField41PT.addEventListener("input", function () {
    displaySelectedItems();
  });

  qty83CT.addEventListener("input", function () {
    price83CT.value = (qty83CT.value * 83).toFixed(2);
    calculateTotal();
    displaySelectedItems(); // Update display box
  });

  dateField83CT.addEventListener("input", function () {
    displaySelectedItems();
  });

  qty41CT.addEventListener("input", function () {
    price41CT.value = (qty41CT.value * 41).toFixed(2);
    calculateTotal();
    displaySelectedItems();
  });

  dateField41CT.addEventListener("input", function () {
    displaySelectedItems();
  });

  qty90MT.addEventListener("input", function () {
    price90MT.value = (qty90MT.value * 94.5).toFixed(2);
    calculateTotal();
    displaySelectedItems();
  });

  dateField90MT.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyMTAny1.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyMTAny1.value);
    let priceValue = parseFloat(priceMTAny1.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceMTAny1.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    displayAny1MT.value = (qtyValue * priceValue).toFixed(2);
    AnyMT1Price = displayAny1MT.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceMTAny1.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyMTAny1.value);
    let priceValue = parseFloat(priceMTAny1.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceMTAny1.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    displayAny1MT.value = (qtyValue * priceValue).toFixed(2);
    AnyMT1Price = displayAny1MT.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldMTAny1.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyMTAny2.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyMTAny2.value);
    let priceValue = parseFloat(priceMTAny2.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceMTAny2.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    displayAny2MT.value = (qtyValue * priceValue).toFixed(2);
    AnyMT2Price = displayAny2MT.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceMTAny2.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyMTAny2.value);
    let priceValue = parseFloat(priceMTAny2.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceMTAny2.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    displayAny2MT.value = (qtyValue * priceValue).toFixed(2);
    AnyMT2Price = displayAny2MT.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldMTAny2.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyAcut.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyAcut.value);
    let priceValue = parseFloat(priceAcut.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceAcut.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    displayAny2MT.value = (qtyValue * priceValue).toFixed(2);
    AnyAcutPrice = displayAcut.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceAcut.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyAcut.value);
    let priceValue = parseFloat(priceAcut.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceAcut.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayAcut.value = (qtyValue * priceValue).toFixed(2);
    AnyAcutPrice = displayAcut.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldAcut.addEventListener("input", function () {
    displaySelectedItems();
  });

  // Initial calculation on page load
  calculateTotal();
});
