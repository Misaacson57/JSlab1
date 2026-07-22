const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

let cards = shuffle(colors.concat(colors));

let selectedCards = []; // this acts as a temp memory storage for the current selected cards during the game

let score = 0; // players score

let timeLeft = 30; // count down for player starting at 30

let gameInterval; // this is going to be used to control the countdown mechanisim 

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


function generateCards(){
 

    // use the for loop to go over each element (color) in the cards array
    for (const color of cards){
        const card = document.createElement('div');//this creates a new div element 
        card.classList.add('card'); // this adds the class card to the div element 
        card.dataset.color = color; 
        card.textContent = '?';
        gameContainer.appendChild(card); // attaches elements to gameContainer element as a child
    }
}


function shuffle(array){


    //goes thjrough array backwards using the last index
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    } 
    return array;
}



function handleCardClick(event){
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if(selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color){
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame(){
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}


function startGameTimer(timeLeft){
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0){
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);