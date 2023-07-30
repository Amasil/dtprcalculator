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

  const qty83PT = document.getElementById("qty-83-pt");
  const price83PT = document.getElementById("price-83-pt");
  const dateField83PT = document.getElementById("date-83-pt");

  const qty41PT = document.getElementById("qty-41-pt");
  const price41PT = document.getElementById("price-41-pt");
  const dateField41PT = document.getElementById("date-41-pt");

  const qty83CT = document.getElementById("qty-83-ct");
  const price83CT = document.getElementById("price-83-ct");
  const dateField83CT = document.getElementById("date-83-ct");

  const qty41CT = document.getElementById("qty-41-ct");
  const price41CT = document.getElementById("price-41-ct");
  const dateField41CT = document.getElementById("date-41-ct");

  const qty90MT = document.getElementById("qty-90-mt");
  const price90MT = document.getElementById("price-90-mt");
  const dateField90MT = document.getElementById("date-90-mt");

  const qtyMTAny1 = document.getElementById("qty-any1-mt");
  const priceMTAny1 = document.getElementById("price-any1-mt");
  const dateFieldMTAny1 = document.getElementById("date-any1-mt");
  const displayAny1MT = document.getElementById("display-price-any1-mt");

  const qtyMTAny2 = document.getElementById("qty-any2-mt");
  const priceMTAny2 = document.getElementById("price-any2-mt");
  const dateFieldMTAny2 = document.getElementById("date-any2-mt");
  const displayAny2MT = document.getElementById("display-price-any2-mt");

  const qtyAcut = document.getElementById("qty-acut");
  const priceAcut = document.getElementById("price-acut");
  const dateFieldAcut = document.getElementById("date-acut");
  const displayAcut = document.getElementById("display-price-acut");

  const qtyOtax = document.getElementById("qty-ot-ax");
  const priceOtax = document.getElementById("price-ot-ax");
  const dateFieldOtax = document.getElementById("date-ot-ax");
  const displayOtax = document.getElementById("display-price-ot-ax");

  const qtyOtTx = document.getElementById("qty-ot-tx");
  const priceOtTx = document.getElementById("price-ot-tx");
  const dateFieldOtTx = document.getElementById("date-ot-tx");
  const displayOtTx = document.getElementById("display-price-ot-tx");

  const qtyPsycAx = document.getElementById("qty-psyc-ax");
  const pricePsycAx = document.getElementById("price-psyc-ax");
  const dateFieldPsycAx = document.getElementById("date-psyc-ax");
  const displayPsycAx = document.getElementById("display-price-psyc-ax");

  const qtyPsycTx = document.getElementById("qty-psyc-tx");
  const pricePsycTx = document.getElementById("price-psyc-tx");
  const dateFieldPsycTx = document.getElementById("date-psyc-tx");
  const displayPsycTx = document.getElementById("display-price-psyc-tx");

  const qtyDental = document.getElementById("qty-dental");
  const priceDental = document.getElementById("price-dental");
  const dateFieldDental = document.getElementById("date-dental");
  const displayDental = document.getElementById("display-price-dental");

  const totalValueElement = document.getElementById("total-value");
  const totalQuantityElement = document.getElementById("total-quantity");
  const selectedItemsContainer = document.getElementById("selected-items");

  const physioSubTotalElement = document.getElementById("physio-subtotal");
  const mtsubtotalElement = document.getElementById("mt-subtotal");
  const ctsubtotalElement = document.getElementById("ct-subtotal");
  const acutSubtotalElement = document.getElementById("acut-subtotal");
  const otSubtotalElement = document.getElementById("ot-subtotal");
  const psycSubtotalElement = document.getElementById("psyc-subtotal");
  const dentalSubtotalElement = document.getElementById("dental-subtotal");

  // New variable to keep track of whether both qty and price are entered for "MT Any1"
  let AnyMT1Price = 0;
  let AnyMT2Price = 0;
  let AnyAcutPrice = 0;
  let suppliePrice = 0;
  let OtAxPrice = 0;
  let OtTxPrice = 0;
  let PsycAxPrice = 0;
  let PsycTxPrice = 0;
  let DentalPrice = 0;
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
      parseFloat(suppliePrice),
      parseFloat(OtAxPrice),
      parseFloat(OtTxPrice),
      parseFloat(PsycAxPrice),
      parseFloat(PsycTxPrice),
      parseFloat(DentalPrice),
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

    const otSubTotal = [parseFloat(OtAxPrice), parseFloat(OtTxPrice)];
    const psycSubTotal = [parseFloat(PsycAxPrice), parseFloat(PsycTxPrice)];
    const dentalSubTotal = [parseFloat(DentalPrice)];

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
        totalQuantityDisplay.innerText = ` DTPR ${totalQtywithPrevious}/10 | Supplies:$${totalSupplies}/120.00 | Used by ${dtprLimit} \n OT/PSYCH/DENTAL $/$1000.00`;
        selectedItemsContainer.appendChild(totalQuantityDisplay);
      }
    } else if (wad.value == "Wad 2") {
      if (anyItemSelected > 0) {
        const totalQuantityDisplay = document.createElement("p");
        totalQuantityDisplay.innerText = ` DTPR ${totalQtywithPrevious}/21 | Supplies:$${totalSupplies}/160.00 | Used by ${dtprLimit} \n OT/PSYCH/DENTAL $/$1000.00`;
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
    const date83PTValue = document.getElementById("date-83-pt").value;
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
    const date41PTValue = document.getElementById("date-41-pt").value;
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
    const date83CTValue = document.getElementById("date-83-ct").value;
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
    const date41CTValue = document.getElementById("date-41-ct").value;
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
    const date90MTValue = document.getElementById("date-90-mt").value;
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
    const dateMTAny1Value = document.getElementById("date-any1-mt").value;
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
    const dateMTAny2Value = document.getElementById("date-any2-mt").value;
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
    const dateAcutValue = document.getElementById("date-acut").value;
    if (qtyAcutValue > 0) {
      addAnyValueItemToDisplay(
        "Acut @ ",
        qtyAcutValue,
        priceAcutValue,
        dateAcutValue
      );
    }

    const qtyOtaxValue = parseFloat(qtyOtax.value);
    const priceOtaxValue = parseFloat(priceOtax.value);
    const dateOtaxValue = document.getElementById("date-ot-ax").value;
    if (qtyOtaxValue > 0) {
      addAnyValueItemToDisplay(
        "OT/AX @ ",
        qtyOtaxValue,
        priceOtaxValue,
        dateOtaxValue
      );
    }

    const qtyOtTxValue = parseFloat(qtyOtTx.value);
    const priceOtTxValue = parseFloat(priceOtTx.value);
    const dateOtTxValue = document.getElementById("date-ot-tx").value;
    if (qtyOtTxValue > 0) {
      addAnyValueItemToDisplay(
        "OT/TX @ ",
        qtyOtTxValue,
        priceOtTxValue,
        dateOtTxValue
      );
    }

    const qtyPsycAxValue = parseFloat(qtyPsycAx.value);
    const pricePsycAxValue = parseFloat(pricePsycAx.value);
    const datePsycAxValue = document.getElementById("date-psyc-ax").value;
    if (qtyPsycAxValue > 0) {
      addAnyValueItemToDisplay(
        "PSYC/AX @ ",
        qtyPsycAxValue,
        pricePsycAxValue,
        datePsycAxValue
      );
    }

    const qtyPsycTxValue = parseFloat(qtyPsycTx.value);
    const pricePsycTxValue = parseFloat(pricePsycTx.value);
    const datePsycTxValue = document.getElementById("date-psyc-tx").value;
    if (qtyPsycTxValue > 0) {
      addAnyValueItemToDisplay(
        "PSYC/TX @ ",
        qtyPsycTxValue,
        pricePsycTxValue,
        datePsycTxValue
      );
    }

    const qtyDentalValue = parseFloat(qtyDental.value);
    const priceDentalValue = parseFloat(priceDental.value);
    const dateDentalValue = document.getElementById("date-dental").value;
    if (qtyDentalValue > 0) {
      addAnyValueItemToDisplay(
        "Dental @ ",
        qtyDentalValue,
        priceDentalValue,
        dateDentalValue
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

  qtyOtax.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyOtax.value);
    let priceValue = parseFloat(priceOtax.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceOtax.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayOtax.value = (qtyValue * priceValue).toFixed(2);
    OtAxPrice = displayOtax.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceOtax.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyOtax.value);
    let priceValue = parseFloat(priceOtax.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceOtax.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayOtax.value = (qtyValue * priceValue).toFixed(2);
    OtAxPrice = displayOtax.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldOtax.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyOtTx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyOtTx.value);
    let priceValue = parseFloat(priceOtTx.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceOtTx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayOtTx.value = (qtyValue * priceValue).toFixed(2);
    OtTxPrice = displayOtTx.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceOtTx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyOtTx.value);
    let priceValue = parseFloat(priceOtTx.value);

    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (priceOtTx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayOtTx.value = (qtyValue * priceValue).toFixed(2);
    OtTxPrice = displayOtTx.value;

    calculateTotal();
    displaySelectedItems();
  });

  dateFieldOtTx.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyPsycAx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyPsycAx.value);
    let priceValue = parseFloat(pricePsycAx.value);
    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (pricePsycAx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayPsycAx.value = (qtyValue * priceValue).toFixed(2);
    PsycAxPrice = displayPsycAx.value;
    calculateTotal();
    displaySelectedItems();
  });

  pricePsycAx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyPsycAx.value);
    let priceValue = parseFloat(pricePsycAx.value);
    // Check if the price has the "g" suffix, if so, multiply by 1.05
    if (pricePsycAx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayPsycAx.value = (qtyValue * priceValue).toFixed(2);
    PsycAxPrice = displayPsycAx.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldPsycAx.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyPsycTx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyPsycTx.value);
    let priceValue = parseFloat(pricePsycTx.value);
    if (pricePsycTx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayPsycTx.value = (qtyValue * priceValue).toFixed(2);
    PsycTxPrice = displayPsycTx.value;
    calculateTotal();
    displaySelectedItems();
  });

  pricePsycTx.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyPsycTx.value);
    let priceValue = parseFloat(pricePsycTx.value);
    if (pricePsycTx.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayPsycTx.value = (qtyValue * priceValue).toFixed(2);
    PsycTxPrice = displayPsycTx.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldPsycTx.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtyDental.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyDental.value);
    let priceValue = parseFloat(priceDental.value);
    if (priceDental.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayDental.value = (qtyValue * priceValue).toFixed(2);
    DentalPrice = displayDental.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceDental.addEventListener("input", function () {
    let qtyValue = parseFloat(qtyDental.value);
    let priceValue = parseFloat(priceDental.value);
    if (priceDental.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    displayDental.value = (qtyValue * priceValue).toFixed(2);
    DentalPrice = displayDental.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldDental.addEventListener("input", function () {
    displaySelectedItems();
  });

  // Initial calculation on page load
  calculateTotal();
});
