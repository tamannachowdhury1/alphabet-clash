/* function play() {
    hideElementBYId('home');// first page remove hye jabe
    showElementBYId('play-ground');//second page open hbe
    getRandomArray();//second page open howar sate function k call korbe
}
function hideElementBYId(elementId) {
    const hidedisplay = document.getElementById(elementId);
    hidedisplay.classList.add('hidden');
}
function showElementBYId(elementId) {
    const hidedisplay = document.getElementById(elementId);
    hidedisplay.classList.remove('hidden');
}
function getRandomArray() {//function call korar por
    const randomArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
    const randomNumber = Math.random() * 25;//random num creat korbeh
    const index = Math.round(randomNumber);
    const alphabet = randomArray[index];//array upadan show korar jnno random number index number hisebeh set kore diche ...maneh randomly jkn je number asbe sei index number er alphabet show korbeh --- ->> exemple : random number 6 asle tahole randomArray er 6 number index er opadan f show korbeh
    //console.log(alphabet);
    const currentAlphabetsY = document.getElementById('current-alphabet')///random alphabet show korar por ata Art board p tag er current-alphabet id k call korbe 
    currentAlphabetsY.innerText = alphabet;//then p tag er inner text hisebeh alphabet gula k set kore dibe
    const setBackgroundColorId = document.getElementById(alphabet);//protekta kbd id k call korbe ekaneh alphabet jkn jeta asbeh maneh randomly setar mdde bg class add korbe
    setBackgroundColorId.classList.add('bg-[#FFA500]');


} */