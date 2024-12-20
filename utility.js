function hideElementBYId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementBYId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');

}
function removeBackgroundColorId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');

}
function getRandomAlphabet() {
    // get or create an alphabet array
    const alphabetsStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsStrings.split('');//array creat 
    console.log(alphabets);
    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];//array index number 
    return alphabet;

}
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    return elementNumber;
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;

    return elementText;
}
function setNumberElementValueById(elementId, value) {
    const element = document.getElementById(elementId, value);
    element.innerText = value;

}