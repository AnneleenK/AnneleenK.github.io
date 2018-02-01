/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


/* 
Micro interactie van het duimpje
Wanneer je klikt op het duimpje gebeurt de aangegeven functie en komt er Hello in de console log te staan, deze staat in het CSS bestand
*/

var swing = document.getElementsByClassName('beweging')[0];

function animatie() {
    console.log('Hello');
    swing.classList.toggle('bewegingactive');
}
document.getElementsByClassName('beweging')[0].addEventListener("click", animatie);





/* Micro interactie van het reactiewolkje 
Wanneer je klikt op het reactie wolkje gebeurt de aangegeven functie en komt er Hello in de console log te staan, deze staat in het CSS bestand
*/

var bounce = document.getElementsByClassName('reactie')[0];

function omhoogomlaag() {
    console.log('hi');
    bounce.classList.toggle('upanddown');
}
document.getElementsByClassName('reactie')[0].addEventListener("click", omhoogomlaag);





/* 
Micro interactie van het hartje 
Wanneer je klikt op het hartje gebeurt de aangegeven functie en komt er Hello in de console log te staan, deze staat in het CSS bestand
*/

var pulse = document.getElementsByClassName('opslaan')[0];

function voorachter() {
    console.log('hoi');
    pulse.classList.toggle('heart');
}
document.getElementsByClassName('opslaan')[0].addEventListener("click", voorachter);