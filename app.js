var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    console.log('WIN');
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convert(userChoice) + " beats " + convert(computerChoice) + ". You win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);

    computerChoice_div.classList.add('yellow-glow');
    setTimeout(() => computerChoice_div.classList.remove('yellow-glow'), 300);
}

function lose(userChoice, computerChoice) {
    console.log('LOSE');
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice) + " loses to " + convert(computerChoice) + ". You lose!";
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 300);

    computerChoice_div.classList.add('yellow-glow');
    setTimeout(() => computerChoice_div.classList.remove('yellow-glow'), 300);
}

function draw(userChoice, computerChoice) {
    console.log('DRAW');
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);
    result_p.innerHTML = convert(userChoice) + " ties " + convert(computerChoice) + ". It's a Draw.";
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win(userChoice, computerChoice);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
    }
}

function main() {
    /*rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
    */

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })
}

main();