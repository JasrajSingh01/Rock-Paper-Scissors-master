// VARIABLES

const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const choicebuttons = document.querySelectorAll('.choice-btn');
const gameDiv = document.querySelector('.game');
const resultsDiv = document.querySelector('.results');
const resultDiv = document.querySelectorAll('.result');

const resultWinner = document.querySelector(".results-winner");
const resultText = document.querySelector(".results-text");

const playAgainBtn = document.querySelector('.play-again');

const scoreNumber = document.querySelector('.score-number')
let score = 0;

console.log('btnRules', btnRules);
console.log('btnClose', btnClose);
console.log('modalRules', modalRules);

const CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    }
]

// GAME LOGIC

choicebuttons.forEach(button => {
    button.addEventListener('click', () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name == choiceName);
        choose(choice);
    })
})

function choose(choice) {
    const aichoice = aichoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
}

function aichoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

function displayResults(results) {
    resultDiv.forEach((resultsDiv, idx) => {
        setTimeout(() => {
            resultsDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="images/icon-${results[idx].name}.svg" alt="${results[idx].name}" />
          </div>
        `;
        }, idx * 1000);
    });

    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results);
        const aiWins = isWinner(results.reverse());

        if (userWins) {
            resultText.innerText = "you win"
            resultDiv[0].classList.toggle('winner');
            keepScore(1);
        } else if (aiWins) {
            resultText.innerText = "you lose"
            resultDiv[1].classList.toggle('winner');
            keepScore(-1);
        } else {
            resultText.innerText = "draw"
        }
        resultWinner.classList.toggle('hidden');
        resultText.classList.toggle('show-winner');
    }, 1000);
}

function isWinner(results) {
    return results[0].beats == results[1].name;
}

function keepScore(point) {
    score += point;
    scoreNumber.innerText = score;
}

// PLAY AGAIN

playAgainBtn.addEventListener('click', () => {
    gameDiv.classList.toggle('hidden');
    resultsDiv.classList.toggle('hidden');

    resultDiv.forEach(resultDiv => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove('winner');
    })

    resultText.innerText = "";
    resultWinner.classList.toggle('hidden');
    resultsDiv.classList.toggle('show-winner');
})

//SHOW/HIDE RULES

btnRules.addEventListener("click", () => {
    modalRules.style.display = "grid";
})
btnClose.addEventListener("click", () => {
    modalRules.style.display = "none";
})