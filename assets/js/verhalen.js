var swing = document.getElementsByClassName('beweging')[0];

function animatie() {
    console.log('Hello')
    swing.classList.toggle('bewegingactive');
}
document.getElementsByClassName('beweging')[0].addEventListener("click", animatie);




var bounce = document.getElementsByClassName('reactie')[0];

function omhoogomlaag() {
    console.log('hi')
    bounce.classList.toggle('upanddown');
}
document.getElementsByClassName('reactie')[0].addEventListener("click", omhoogomlaag);





var pulse = document.getElementsByClassName('opslaan')[0];

function voorachter() {
    console.log('hoi')
    pulse.classList.toggle('heart');
}
document.getElementsByClassName('opslaan')[0].addEventListener("click", voorachter);