{
    const score = [0,0];
    printScore(score);
    const playGame = function (playerInput){

        clearMessages();

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const getMoveName = function (moveId){
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
        const computerMove = getMoveName(randomNumber);
        const playerMove = getMoveName(playerInput);
        const displayResult = function (argComputerMove, argPlayerMove){

            printMessage('Ruch komputera to ' + argComputerMove + ' Twoj ruch to: ' + argPlayerMove);
    
            // remis
            if (argComputerMove == argPlayerMove){
                printMessage('Remis!');
            } 
            //sciezka kamienia
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz');
                score[1]++;
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Komputer wygrywa');
                score[0]++;
            }
            //sciezka papieru
            if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Komputer wygrywa');
                score[0]++;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz');
                score[1]++;
            }
            //sciezka nozyc
            if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Komputer wygrywa');
                score[0]++;
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz');
                score[1]++;
            }
    
        }
        displayResult(computerMove, playerMove)
        printScore(score);
    }

    document.getElementById('play-rock').addEventListener('click', function(){playGame(1)})
    document.getElementById('play-paper').addEventListener('click', function(){playGame(2)})
    document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)})

}

