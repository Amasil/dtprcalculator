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

  const supply1Desc = document.getElementById("supply-one");
  const qtySupply1 = document.getElementById("qty-supply-one");
  const priceSupply1 = document.getElementById("price-supply-one");
  const displaySupply1 = document.getElementById("display-price-supply-one");

  const supply2Desc = document.getElementById("supply-two");
  const qtySupply2 = document.getElementById("qty-supply-two");
  const priceSupply2 = document.getElementById("price-supply-two");
  const displaySupply2 = document.getElementById("display-price-supply-two");

  const supply3Desc = document.getElementById("supply-three");
  const qtySupply3 = document.getElementById("qty-supply-three");
  const priceSupply3 = document.getElementById("price-supply-three");
  const displaySupply3 = document.getElementById("display-price-supply-three");

  const supply4Desc = document.getElementById("supply-four");
  const qtySupply4 = document.getElementById("qty-supply-four");
  const priceSupply4 = document.getElementById("price-supply-four");
  const displaySupply4 = document.getElementById("display-price-supply-four");

  const supply5Desc = document.getElementById("supply-five");
  const qtySupply5 = document.getElementById("qty-supply-five");
  const priceSupply5 = document.getElementById("price-supply-five");
  const displaySupply5 = document.getElementById("display-price-supply-five");

  const supply6Desc = document.getElementById("supply-six");
  const qtySupply6 = document.getElementById("qty-supply-six");
  const priceSupply6 = document.getElementById("price-supply-six");
  const displaySupply6 = document.getElementById("display-price-supply-six");

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
  const suppliesSubtotalElement = document.getElementById("supply-subtotal");

  // Find the copy button element
  const copyButton = document.getElementById("copy-btn");

  let selectedAny1MT = 0;
  let selectedAny2MT = 0;
  let selectedAcut = 0;
  let selectedOtax = 0;
  let selectedOtTx = 0;
  let selectedPsycAx = 0;
  let selectedPsycTx = 0;
  let selectedDental = 0;
  let selectedSupply1 = 0;
  let selectedSupply2 = 0;
  let selectedSupply3 = 0;
  let selectedSupply4 = 0;
  let selectedSupply5 = 0;
  let selectedSupply6 = 0;

  // New variable to keep track of whether both qty and price are entered for "MT Any1"
  let AnyMT1Price = 0;
  let AnyMT2Price = 0;
  let AnyAcutPrice = 0;
  let OtAxPrice = 0;
  let OtTxPrice = 0;
  let PsycAxPrice = 0;
  let PsycTxPrice = 0;
  let DentalPrice = 0;
  let dtprLimit = 0;
  let Supply1 = 0;
  let Supply2 = 0;
  let Supply3 = 0;
  let Supply4 = 0;
  let Supply5 = 0;
  let Supply6 = 0;

  let isGSTIncluded = false; // Assume GST is included by default

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
      parseFloat(qtyDental.value) > 0 ||
      parseFloat(qtySupply1.value) > 0 ||
      parseFloat(qtySupply2.value) > 0 ||
      parseFloat(qtySupply3.value) > 0 ||
      parseFloat(qtySupply4.value) > 0 ||
      parseFloat(qtySupply5.value) > 0 ||
      parseFloat(qtySupply6.value) > 0;

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
      parseFloat(OtAxPrice),
      parseFloat(OtTxPrice),
      parseFloat(PsycAxPrice),
      parseFloat(PsycTxPrice),
      parseFloat(DentalPrice),
      parseFloat(Supply1),
      parseFloat(Supply2),
      parseFloat(Supply3),
      parseFloat(Supply4),
      parseFloat(Supply5),
      parseFloat(Supply6),
    ];

    let physioSubTotal = [];
    let ctSubTotal = [];

    if (
      (parseFloat(qty83PT.value) == 0) &
      (parseFloat(qty41PT.value) == 0) &
      (parseFloat(qty83CT.value) == 0) &
      (parseFloat(qty41CT.value) == 0)
    ) {
      physioSubTotal = [
        parseFloat(priceAB1.value),
        parseFloat(priceAB2.value),
        parseFloat(priceAB4.value),
      ];
      ctSubTotal = [0];
    } else {
      if (parseFloat(qty83PT.value) != 0 || parseFloat(qty41PT.value) != 0) {
        physioSubTotal = [
          parseFloat(priceAB1.value),
          parseFloat(priceAB2.value),
          parseFloat(priceAB4.value),
          parseFloat(price83PT.value),
          parseFloat(price41PT.value),
        ];

        ctSubTotal = [parseFloat(price83CT.value), parseFloat(price41CT.value)];
      }
      if (
        (parseFloat(qty83PT.value) == 0) & (parseFloat(qty41PT.value) == 0) ||
        parseFloat(qty83CT.value) != 0 ||
        parseFloat(qty41CT.value) != 0
      ) {
        physioSubTotal = [0];

        ctSubTotal = [
          parseFloat(priceAB1.value),
          parseFloat(priceAB2.value),
          parseFloat(priceAB4.value),
          parseFloat(price83CT.value),
          parseFloat(price41CT.value),
        ];
      }
    }
    // if (parseFloat(qty83PT.value) != 0 || parseFloat(qty41PT.value) != 0) {
    //   physioSubTotal = [
    //     parseFloat(priceAB1.value),
    //     parseFloat(priceAB2.value),
    //     parseFloat(priceAB4.value),
    //     parseFloat(price83PT.value),
    //     parseFloat(price41PT.value),
    //   ];

    //   ctSubTotal = [parseFloat(price83CT.value), parseFloat(price41CT.value)];
    // }

    // if (
    //   parseFloat(qty83PT.value) == 0 ||
    //   parseFloat(qty41PT.value) == 0 ||
    //   parseFloat(qty83CT.value) != 0 ||
    //   parseFloat(qty41CT.value) != 0
    // ) {
    //   physioSubTotal = [0];

    //   ctSubTotal = [
    //     parseFloat(priceAB1.value),
    //     parseFloat(priceAB2.value),
    //     parseFloat(priceAB4.value),
    //     parseFloat(price83CT.value),
    //     parseFloat(price41CT.value),
    //   ];
    // }

    // else {
    //   ctSubTotal = [
    //     parseFloat(price83CT.value),
    //     parseFloat(price41CT.value),
    //     parseFloat(priceAB1.value),
    //     parseFloat(priceAB2.value),
    //     parseFloat(priceAB4.value),
    //   ];
    // }

    const mtSubTotal = [
      parseFloat(price90MT.value),
      parseFloat(AnyMT1Price),
      parseFloat(AnyMT2Price),
    ];

    const acutSubTotal = [parseFloat(AnyAcutPrice)];

    const otSubTotal = [parseFloat(OtAxPrice), parseFloat(OtTxPrice)];
    const psycSubTotal = [parseFloat(PsycAxPrice), parseFloat(PsycTxPrice)];
    const dentalSubTotal = [parseFloat(DentalPrice)];

    const otPsycDentalTotal = [
      parseFloat(previousOtPsyc.value),
      parseFloat(OtAxPrice),
      parseFloat(OtTxPrice),
      parseFloat(PsycAxPrice),
      parseFloat(PsycTxPrice),
      parseFloat(DentalPrice),
    ];

    const supplietotal = [
      parseFloat(suppliesPrevious.value),
      parseFloat(Supply1),
      parseFloat(Supply2),
      parseFloat(Supply3),
      parseFloat(Supply4),
      parseFloat(Supply5),
      parseFloat(Supply6),
    ];

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
    const OtPsycDentalTotal = otPsycDentalTotal.reduce(
      (acc, qty) => acc + qty,
      0
    );
    // Hide "Total Quantity" if totalQty is 0

    if (wad.value == "Wad 1") {
      if (anyItemSelected > 0) {
        const totalQuantityDisplay = document.createElement("p");
        totalQuantityDisplay.innerText = ` ================================================= \n DTPR ${totalQtywithPrevious}/10 | Supplies:$${totalSupplies}/120.00 | Used by ${dtprLimit} \n OT/PSYCH/DENTAL $${OtPsycDentalTotal}/$1000.00`;
        selectedItemsContainer.appendChild(totalQuantityDisplay);
      }
    } else if (wad.value == "Wad 2") {
      if (anyItemSelected > 0) {
        const totalQuantityDisplay = document.createElement("p");
        totalQuantityDisplay.innerText = ` ================================================= \n DTPR ${totalQtywithPrevious}/21 | Supplies:$${totalSupplies}/160.00 | Used by ${dtprLimit} \n OT/PSYCH/DENTAL $${OtPsycDentalTotal}/$1000.00`;
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
    suppliesSubtotalElement.value = totalSupplies.toFixed(2);
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
      dateValue,
      gstCheck
    ) {
      if (gstCheck) {
        const itemDisplay = document.createElement("p");
        itemDisplay.innerText = `${qtyValue} ${itemName} $${priceValue} Each (GST Incl.)- Date: ${dateValue}`;
        selectedItemsContainer.appendChild(itemDisplay);
      } else {
        const itemDisplay = document.createElement("p");
        itemDisplay.innerText = `${qtyValue} ${itemName} $${priceValue} Each - Date: ${dateValue}`;
        selectedItemsContainer.appendChild(itemDisplay);
      }
    }

    function addSupliesToDisplay(itemName, qtyValue, priceValue, gstCheck) {
      if (gstCheck) {
        const itemDisplay = document.createElement("p");
        itemDisplay.innerText = `Supplies: ${qtyValue} ${itemName} @ $${priceValue} Each GST Incl.`;
        selectedItemsContainer.appendChild(itemDisplay);
      } else {
        const itemDisplay = document.createElement("p");
        itemDisplay.innerText = `Supplies: ${qtyValue} ${itemName} @ $${priceValue} Each `;
        selectedItemsContainer.appendChild(itemDisplay);
      }
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
        "MT @ $94.50 Each (GST Incl.)",
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
        selectedAny1MT,
        dateMTAny1Value,
        priceMTAny1.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyMTAny2Value = parseFloat(qtyMTAny2.value);
    const priceMTAny2Value = parseFloat(priceMTAny2.value);
    const dateMTAny2Value = document.getElementById("date-any2-mt").value;
    if (qtyMTAny2Value > 0) {
      addAnyValueItemToDisplay(
        "MT @ ",
        qtyMTAny2Value,
        selectedAny2MT,
        dateMTAny2Value,
        priceMTAny2.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyAcutValue = parseFloat(qtyAcut.value);
    const priceAcutValue = parseFloat(priceAcut.value);
    const dateAcutValue = document.getElementById("date-acut").value;
    if (qtyAcutValue > 0) {
      addAnyValueItemToDisplay(
        "Acut @ ",
        qtyAcutValue,
        selectedAcut,
        dateAcutValue,
        priceAcut.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyOtaxValue = parseFloat(qtyOtax.value);
    const priceOtaxValue = parseFloat(priceOtax.value);
    const dateOtaxValue = document.getElementById("date-ot-ax").value;
    if (qtyOtaxValue > 0) {
      addAnyValueItemToDisplay(
        "OT AX @ ",
        qtyOtaxValue,
        selectedOtax,
        dateOtaxValue,
        priceOtax.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyOtTxValue = parseFloat(qtyOtTx.value);
    const priceOtTxValue = parseFloat(priceOtTx.value);
    const dateOtTxValue = document.getElementById("date-ot-tx").value;
    if (qtyOtTxValue > 0) {
      addAnyValueItemToDisplay(
        "OT TX @ ",
        qtyOtTxValue,
        selectedOtTx,
        dateOtTxValue,
        priceOtTx.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyPsycAxValue = parseFloat(qtyPsycAx.value);
    const pricePsycAxValue = parseFloat(pricePsycAx.value);
    const datePsycAxValue = document.getElementById("date-psyc-ax").value;
    if (qtyPsycAxValue > 0) {
      addAnyValueItemToDisplay(
        "PSYC AX @ ",
        qtyPsycAxValue,
        selectedPsycAx,
        datePsycAxValue,
        pricePsycAx.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyPsycTxValue = parseFloat(qtyPsycTx.value);
    const pricePsycTxValue = parseFloat(pricePsycTx.value);
    const datePsycTxValue = document.getElementById("date-psyc-tx").value;
    if (qtyPsycTxValue > 0) {
      addAnyValueItemToDisplay(
        "PSYC TX @ ",
        qtyPsycTxValue,
        selectedPsycTx,
        datePsycTxValue,
        pricePsycTx.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtyDentalValue = parseFloat(qtyDental.value);
    const priceDentalValue = parseFloat(priceDental.value);
    const dateDentalValue = document.getElementById("date-dental").value;
    if (qtyDentalValue > 0) {
      addAnyValueItemToDisplay(
        "Dental @ ",
        qtyDentalValue,
        selectedDental,
        dateDentalValue,
        priceDental.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply1Value = parseFloat(qtySupply1.value);
    if (qtySupply1Value > 0) {
      addSupliesToDisplay(
        supply1Desc.value,
        qtySupply1Value,
        selectedSupply1,
        priceSupply1.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply2Value = parseFloat(qtySupply2.value);
    if (qtySupply2Value > 0) {
      addSupliesToDisplay(
        supply2Desc.value,
        qtySupply2Value,
        selectedSupply2,
        priceSupply2.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply3Value = parseFloat(qtySupply3.value);
    if (qtySupply3Value > 0) {
      addSupliesToDisplay(
        supply3Desc.value,
        qtySupply3Value,
        selectedSupply3,
        priceSupply3.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply4Value = parseFloat(qtySupply4.value);

    if (qtySupply4Value > 0) {
      addSupliesToDisplay(
        supply4Desc.value,
        qtySupply4Value,
        selectedSupply4,
        priceSupply4.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply5Value = parseFloat(qtySupply5.value);
    if (qtySupply5Value > 0) {
      addSupliesToDisplay(
        supply5Desc.value,
        qtySupply5Value,
        selectedSupply5,
        priceSupply5.value.trim().toLowerCase().endsWith("g")
      );
    }

    const qtySupply6Value = parseFloat(qtySupply6.value);
    if (qtySupply6Value > 0) {
      addSupliesToDisplay(
        supply6Desc.value,
        qtySupply6Value,

        selectedSupply6,
        priceSupply6.value.trim().toLowerCase().endsWith("g")
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

  dateOfLoss.addEventListener("input", function () {
    const daysToAdd = 91;
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

  previousOtPsyc.addEventListener("input", function () {
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
    selectedAny1MT = priceValue;

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
      isGSTIncluded = true;
    }
    selectedAny1MT = priceValue;
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
    selectedAny2MT = priceValue;

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
    selectedAny2MT = priceValue;

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
    selectedAcut = priceValue;
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
    selectedAcut = priceValue;
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
    selectedOtax = priceValue;
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
    selectedOtax = priceValue;
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
    selectedOtTx = priceValue;
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
    selectedOtTx = priceValue;
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
    selectedPsycAx = priceValue;
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
    selectedPsycAx = priceValue;
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
    selectedPsycTx = priceValue;
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
    selectedPsycTx = priceValue;
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
    selectedDental = priceValue;
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
    selectedDental = priceValue;
    displayDental.value = (qtyValue * priceValue).toFixed(2);
    DentalPrice = displayDental.value;
    calculateTotal();
    displaySelectedItems();
  });

  dateFieldDental.addEventListener("input", function () {
    displaySelectedItems();
  });

  supply1Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply1.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply1.value);
    let priceValue = parseFloat(priceSupply1.value);
    if (priceSupply1.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply1 = priceValue;
    displaySupply1.value = (qtyValue * priceValue).toFixed(2);
    Supply1 = displaySupply1.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply1.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply1.value);
    let priceValue = parseFloat(priceSupply1.value);
    if (priceSupply1.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply1 = priceValue;
    displaySupply1.value = (qtyValue * priceValue).toFixed(2);
    Supply1 = displaySupply1.value;
    calculateTotal();
    displaySelectedItems();
  });

  supply2Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply2.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply2.value);
    let priceValue = parseFloat(priceSupply2.value);
    if (priceSupply2.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply2 = priceValue;
    displaySupply2.value = (qtyValue * priceValue).toFixed(2);
    Supply2 = displaySupply2.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply2.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply2.value);
    let priceValue = parseFloat(priceSupply2.value);

    if (priceSupply2.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply2 = priceValue;

    displaySupply2.value = (qtyValue * priceValue).toFixed(2);
    Supply2 = displaySupply2.value;
    calculateTotal();
    displaySelectedItems();
  });

  supply3Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply3.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply3.value);

    let priceValue = parseFloat(priceSupply3.value);

    if (priceSupply3.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    selectedSupply3 = priceValue;

    displaySupply3.value = (qtyValue * priceValue).toFixed(2);
    Supply3 = displaySupply3.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply3.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply3.value);
    let priceValue = parseFloat(priceSupply3.value);

    if (priceSupply3.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply3 = priceValue;
    displaySupply3.value = (qtyValue * priceValue).toFixed(2);

    Supply3 = displaySupply3.value;
    calculateTotal();
    displaySelectedItems();
  });

  supply4Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply4.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply4.value);
    let priceValue = parseFloat(priceSupply4.value);

    if (priceSupply4.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply4 = priceValue;
    displaySupply4.value = (qtyValue * priceValue).toFixed(2);
    Supply4 = displaySupply4.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply4.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply4.value);
    let priceValue = parseFloat(priceSupply4.value);

    if (priceSupply4.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    selectedSupply4 = priceValue;
    displaySupply4.value = (qtyValue * priceValue).toFixed(2);
    Supply4 = displaySupply4.value;
    calculateTotal();
    displaySelectedItems();
  });

  supply5Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply5.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply5.value);
    let priceValue = parseFloat(priceSupply5.value);

    if (priceSupply5.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    selectedSupply5 = priceValue;

    displaySupply5.value = (qtyValue * priceValue).toFixed(2);
    Supply5 = displaySupply5.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply5.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply5.value);
    let priceValue = parseFloat(priceSupply5.value);

    if (priceSupply5.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }

    selectedSupply5 = priceValue;
    displaySupply5.value = (qtyValue * priceValue).toFixed(2);
    Supply5 = displaySupply5.value;
    calculateTotal();
    displaySelectedItems();
  });

  supply6Desc.addEventListener("input", function () {
    displaySelectedItems();
  });

  qtySupply6.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply6.value);
    let priceValue = parseFloat(priceSupply6.value);

    if (priceSupply6.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply6 = priceValue;

    displaySupply6.value = (qtyValue * priceValue).toFixed(2);
    Supply6 = displaySupply6.value;
    calculateTotal();
    displaySelectedItems();
  });

  priceSupply6.addEventListener("input", function () {
    let qtyValue = parseFloat(qtySupply6.value);
    let priceValue = parseFloat(priceSupply6.value);

    if (priceSupply6.value.trim().toLowerCase().endsWith("g")) {
      priceValue *= 1.05;
    }
    selectedSupply6 = priceValue;

    displaySupply6.value = (qtyValue * priceValue).toFixed(2);
    Supply6 = displaySupply6.value;
    calculateTotal();
    displaySelectedItems();
  });

  // Add a click event listener to the copy button
  copyButton.addEventListener("click", function () {
    // Get the selected-items container element
    const selectedItemsContainer = document.getElementById("selected-items");

    // Create a range object to select the content inside the selected-items container
    const range = document.createRange();
    range.selectNode(selectedItemsContainer);

    // Create a new selection and add the range to it
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected content as HTML with formatting to the clipboard
    document.execCommand("copy");

    // Clear the selection to avoid any unintended side effects
    selection.removeAllRanges();

    // Optionally, you can show a message or perform any other action after copying
    alert("Selected items copied to clipboard!");
  });

  // Initial calculation on page load
  calculateTotal();
});
