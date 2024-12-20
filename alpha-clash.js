/* function play() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

} */
function addeventhandler(event) {
    const playerPressed = event.key;
    if (playerPressed === 'Escape') {
        gameOver();
    }
    const currentAlphabets = getElementTextById('current-alphabet');

    const currentAlphabetsLowerCase = currentAlphabets.toLowerCase();

    if (playerPressed === currentAlphabetsLowerCase) {
        const currentScores = getTextElementValueById('current-score');
        const updatedScore = currentScores + 1;
        setNumberElementValueById('current-score', updatedScore);


        removeBackgroundColorId(currentAlphabetsLowerCase);
        continueGame();
        //------------------------------------
        //update score:
        //1. get the current score
        //2.increase the score by 1
        //3. show the updated score
        /*  const ccurrentScoreCAll = document.getElementById('current-score');
         const currentvalue = ccurrentScoreCAll.innerText;
         const currentScore = parseInt(currentvalue); */

        //2 increase the score
        /* const newScore = currentScore + 1; */
        //3 show the updated score
        /*  ccurrentScoreCAll.innerText = newScore;
 
         removeBackgroundColorId(currentAlphabetLowerCase);
         continueGame(); */


    }
    else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLifeNymber = currentLife - 1;
        if (updatedLifeNymber === 0) {
            gameOver();
        }
        setNumberElementValueById('current-life', updatedLifeNymber);
        //--------------------------
        //step 1 :get the current life  number
        //step 2: reduce the life count
        //step3 :display the updated life count

        /*   const currentLife = document.getElementById('current-life');
          const currentLifeText = currentLife.innerText;
          const currentLifeNumber = parseInt(currentLifeText);
          const newReduceNumber = currentLifeNumber - 1;
          currentLife.innerText = newReduceNumber; */
    }
}
document.addEventListener('keyup', addeventhandler);
function continueGame() {
    //step-1:generate a random alphabet
    const alphabet = getRandomAlphabet();
    //set randomly generataed alphabets to the screen(show it)
    const currentAlphabets = document.getElementById('current-alphabet');//art board er y call korbbeh
    currentAlphabets.innerText = alphabet;//y er mdde randomly alphabet set korbeh innertext er maddome
    //set backgroundcolor
    setBackgroundColorId(alphabet);//alphabet maneh ekane kbd er id k call kora hcce bg color change hcce
}
function play() {
    hideElementBYId('home');
    hideElementBYId('score');
    showElementBYId('play-ground');
    //reset score and life when you play again game
    setNumberElementValueById('current-life', 5);
    setNumberElementValueById('current-score', 0);

    continueGame();
}
function gameOver() {
    hideElementBYId('play-ground');
    showElementBYId('score');
    //update final score
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    setNumberElementValueById('game-score', lastScore);

    //clear the last seleccted alphabet
    const currentAlphabets = getElementTextById('current-alphabet');
    removeBackgroundColorId(currentAlphabets);
}
