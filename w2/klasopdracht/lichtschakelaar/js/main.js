// Haal de nodige HTML elementen op uit de DOM en plaats ze in variabelen

// Hou in een variabele met data type Boolean bij of de lamp aan of uit staat

// Hou in een variabele met data type Number bij hoeveel keer de lichtknop werd ingeduwd.

// EXTRA - Haal het element op waarin het aantal keer dat de lichtknop werd ingeduwd moet worden weergegeven
const switchElement = document.getElementById("timesSwitched");
switchElement.textContent = timesSwitched;

const knop = document.getElementById('switch');
let aantalSwitches = document.getElementById("timesSwitched").textContent;
const knopState = document.getElementById('switchState');
knop.addEventListener('click', function() {
    knop.classList.toggle('switched');
    aantalSwitches++;
    switchElement.textContent = aantalSwitches;
    knopState.textContent = knop.classList.contains('switched') ? 'Lamp is aan' : 'Lamp is uit';
});
return aantalSwitches;


/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de switch verandert.
 * - Update daarin een klasse op een element
 * - Vermeerder de variabele die het aantal kliks bijhoudt
 * - Geef het aantal kliks weer in het witte kader bovenaan links
 * - Pas de boolean aan die checkt of de lamp aan of uit staat
 */


/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de cursor wordt ingedrukt
 * Pas daarna de gepaste klasse aan op het gepaste element.
 */

/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de cursor niet meer wordt ingedrukt
 * Pas daarna de gepaste klasse aan op het gepaste element.
 */

/**
 * Schrijf een functie die het totaalverbruik berekent en dit toont in het witte kader bovenaan links.
 * De berekening hoeft niet te kloppen; het volstaat om om de seconde het getal te verhogen met 1.
 */

/**
 *  Schrijf een setInterval() functie die om de seconde het totaalverbruik herberekend.
 */
