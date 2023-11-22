function getMoveName(moveId){
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2){
        return 'papier';
    } else if (moveId == 3){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + moveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){

    printMessage('Ruch komputera to ' + argComputerMove + ' Twoj ruch to: ' + argPlayerMove);

    // remis
    if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
    } 
    //sciezka kamienia
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa');
    }
    //sciezka papieru
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
    }
    //sciezka nozyc
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    }

}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);

displayResult(computerMove, playerMove)



