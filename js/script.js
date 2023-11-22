let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);

//kontrola randomNumber
console.log(randomNumber)

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
    computerMove = 'nożyce';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (playerInput == 1) {
    playerMove = 'kamień';
} else if (playerInput == 2){
    playerMove = 'papier';
} else if (playerInput == 3){
    playerMove = 'nożyce';
}
// remis
if (computerMove == playerMove){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Remis!');
} 
//sciezka kamienia
if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Ty wygrywasz');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Komputer wygrywa');
}
//sciezka papieru
 if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Komputer wygrywa');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Ty wygrywasz');
}
//sciezka nozyc
if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Komputer wygrywa');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ruch komputera to ' + computerMove + ' Twoj ruch to: ' + playerMove);
    printMessage('Ty wygrywasz');
}
