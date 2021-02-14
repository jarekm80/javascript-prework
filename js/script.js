function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else {return 'nożyce'}
}

function displayResult(argComputerMove, argPlayerMove){
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

function getPlayerInput(){
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = 'nieznany ruch';
    if(playerInput == '1'){
        argPlayerMove = 'kamień';
    } else if (playerInput == 2) {
        argPlayerMove = 'papier';
    } else if (playerInput == 3) {
        argPlayerMove = 'nożyce'}
    return argPlayerMove;    
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove=getMoveName(randomNumber);
let playerMove=getPlayerInput();

displayResult(computerMove,playerMove);