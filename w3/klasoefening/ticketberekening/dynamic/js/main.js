// Functie om data op te halen uit een HTML-element via een data-attribuut
function getDataFromElement(element, dataAttributeName) {
    return element.getAttribute(dataAttributeName) || "";
}

// Functie om tekstinhoud naar een HTML-element te schrijven
function writeDataToElement(element, value) {
    if (element) {
        element.textContent = value;
    }
}

// Functie om meerdere elementen te updaten met dezelfde data
function updateElementsWithData(elements, dataElement, dataAttributeName) {
    if (!elements || !dataElement) return;
    const dataValue = getDataFromElement(dataElement, dataAttributeName);
    
    elements.forEach(element => {
        writeDataToElement(element, dataValue);
    });
}

// Functie om één specifiek element te updaten met data
function updateElementWithData(element, dataElement, dataAttributeName) {
    if (!element || !dataElement) return;
    
    const dataValue = getDataFromElement(dataElement, dataAttributeName);
    writeDataToElement(element, dataValue);
}

document.addEventListener("DOMContentLoaded", () => {
    // Ophalen van shownaam en invullen in de titel- en ondertitelvelden
    updateElementWithData(
        document.querySelector(".right-info-container .title-data"), 
        document.getElementById("show-name-data"), 
        "data-show-name-title"
    );

    // Updaten van het tijdschema aan de rechterkant
    updateElementWithData(
        document.querySelector(".right-info-container .date-time-doors"), 
        document.getElementById("time-data"), 
        "data-time-doors"
    );

    // Ophalen van elementen die het ticketnummer tonen
    updateElementWithData(
        document.querySelector(".right-info-container .ticket-number"), 
        document.getElementById("ticket-number-data"), 
        "data-ticket-number"
    );

    // Ophalen en tonen van de barcode-afbeelding
    const barcodeElement = document.getElementById("barcode-img");
    const barcodeData = getDataFromElement(document.getElementById("barcode"), "data-barcode-src");
    if (barcodeElement && barcodeData) {
        barcodeElement.src = barcodeData;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Ophalen van datumgegevens en invullen van de juiste velden
    updateElementWithData(document.getElementById("date-day"), document.getElementById("date-data"), "data-date-day");
    updateElementWithData(document.getElementById("date-month"), document.getElementById("date-data"), "data-date-month-day");
    updateElementWithData(document.getElementById("date-year"), document.getElementById("date-data"), "data-date-year");

    // Ophalen van shownaam en invullen in de titel- en ondertitelvelden
    updateElementWithData(document.getElementById("title-data"), document.getElementById("show-name-data"), "data-show-name-title");
    updateElementWithData(document.getElementById("subtitle-data"), document.getElementById("show-name-data"), "data-show-name-subtitle");

    // Ophalen van tijdsgegevens en invullen op de juiste plekken
    updateElementWithData(document.querySelector(".date-time-start"), document.getElementById("time-data"), "data-time-start");
    updateElementWithData(document.querySelector(".date-time-end"), document.getElementById("time-data"), "data-time-end");
    updateElementWithData(document.querySelector(".date-time-doors"), document.getElementById("time-data"), "data-time-doors");

    // Ophalen van locatiegegevens en invullen in de juiste velden
    updateElementWithData(document.getElementById("location-address"), document.getElementById("location-data"), "data-location-address");
    updateElementWithData(document.getElementById("location-city"), document.getElementById("location-data"), "data-location-city");

    // Ophalen van elementen die het ticketnummer tonen
    updateElementWithData(document.querySelector(".ticket-number"), document.getElementById("ticket-number-data"), "data-ticket-number");

    // Ophalen en tonen van de barcode-afbeelding
    const barcodeElement = document.getElementById("barcode-img");
    const barcodeData = getDataFromElement(document.getElementById("barcode"), "data-barcode-src");
    if (barcodeElement && barcodeData) {
        barcodeElement.src = barcodeData;
    }
});

// Winkelwagentje functionaliteit
let totalPrice = 0;
const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
const addButtons = document.querySelectorAll(".add-ticket");

// Eventlisteners toevoegen aan knoppen om tickets toe te voegen
addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const ticketType = button.getAttribute("data-type");
        const ticketPrice = parseFloat(button.getAttribute("data-price"));
        
        totalPrice += ticketPrice;
        totalPriceElement.textContent = totalPrice.toFixed(2);
        
        const listItem = document.createElement("li");
        listItem.textContent = `${ticketType} Ticket - €${ticketPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
});
