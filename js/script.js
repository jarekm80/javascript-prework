{
const computerMove = function (argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else {return 'nożyce'}
}

const displayResult = function (argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argPlayerMove == 'nieznany ruch'){
        printMessage('Wprowadziłeś nieobsługiwany znak');
    }else if (( argComputerMove == 'kamień' && argPlayerMove == 'papier') || ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') || ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
        printMessage('Remis');
    } else {
        printMessage('Wygrywa komputer');
    }
}  

const playerMove = function (argPlayerInput){
    if(argPlayerInput == '1'){
        argPlayerMove = 'kamień';
    } else if (argPlayerInput == 2) {
        argPlayerMove = 'papier';
    } else if (argPlayerInput == 3) {
        argPlayerMove = 'nożyce'}
    return argPlayerMove;    
}

function playGame(playerInput){
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    //let computerMove=getMoveName(randomNumber);
    //let playerMove=getPlayerInput(playerInput);
    displayResult(computerMove(randomNumber),playerMove(playerInput));
}

document.getElementById('play-rock').addEventListener('click', function(){ playGame(1)});
document.getElementById('play-paper').addEventListener('click', function(){ playGame(2)});
document.getElementById('play-scissors').addEventListener('click', function(){ playGame(3)});
}