


//Initiate HTML elements
let body = document.getElementById("body");
let titleScreen = document.getElementById("titleScreen");
let rulesPage = document.getElementById("rulesPage");
let playScreen = document.getElementById("playScreen");
let optionScreen = document.getElementById("optionScreen");
let bottomScreen = document.getElementById("bottomScreen");
let bottomScreenPlayerOneWin = document.getElementById("bottomScreenPlayerOneWin");
let bottomScreenPlayerTwoWin = document.getElementById("bottomScreenPlayerTwoWin");
let bottomScreenDraw = document.getElementById("bottomScreenDraw");
let winnerScreen = document.getElementById("winnerScreen");

let playerOneWins = document.getElementById("playerOneWins");
let playerTwoWins = document.getElementById("playerTwoWins");

let playerOneStatus = document.getElementById("playerOneStatus");
let playerTwoStatus = document.getElementById("playerTwoStatus");
let overallStatus = document.getElementById("overallStatus");
let playHeader = document.getElementById("playHeader");
let playerOneScoreStat = document.getElementById("playerOneScoreStat");
let playerTwoScoreStat = document.getElementById("playerTwoScoreStat");
let playerOneFinalScore = document.getElementById("playerOneFinalScore");
let playerTwoFinalScore = document.getElementById("playerTwoFinalScore");
let winnerScreenTitle = document.getElementById("winnerScreenTitle");
let playerTwoName = document.getElementById("playerTwoName");

let changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
let changeBackgroundBtn2 = document.getElementById("changeBackgroundBtn2");
let oneVOneBtn = document.getElementById("oneVOneBtn");
let oneVCPUBtn = document.getElementById("oneVCPUBtn");
let bestOfOneBtn = document.getElementById("bestOfOneBtn");
let twoOutOfThreeBtn = document.getElementById("twoOutOfThreeBtn");
let threeOutOfFiveBtn = document.getElementById("threeOutOfFiveBtn");
let rulesBtn = document.getElementById("rulesBtn");
let rulesBtn2 = document.getElementById("rulesBtn2");
let playBtn = document.getElementById("playBtn");
let ruleBackBtn = document.getElementById("ruleBackBtn");
let optionsBtn = document.getElementById("optionsBtn");
let resumeBtn = document.getElementById("resumeBtn");
let quitBtn = document.getElementById("quitBtn");
let fightBtn = document.getElementById("fightBtn");
let nextBtnDraw = document.getElementById("nextBtnDraw");
let nextBtnPlayerTwoWins = document.getElementById("nextBtnPlayerTwoWins");
let nextBtnPlayerOneWins = document.getElementById("nextBtnPlayerOneWins");
let quitBtn2 = document.getElementById("quitBtn2");
let musicBtn = document.getElementById("musicBtn");
let musicBtn2 = document.getElementById("musicBtn2");

let rock1 = document.getElementById("rock1");
let paper1 = document.getElementById("paper1");
let scissors1 = document.getElementById("scissors1");
let lizard1 = document.getElementById("lizard1");
let spock1 = document.getElementById("spock1");
let rock2 = document.getElementById("rock2");
let paper2 = document.getElementById("paper2");
let scissors2 = document.getElementById("scissors2");
let lizard2 = document.getElementById("lizard2");
let spock2 = document.getElementById("spock2");

// music initializing
let fightSound = document.getElementById("fightSound");
let roundEndSound = document.getElementById("roundEndSound");
let titleMusic = document.getElementById("titleMusic");
let round1Music = document.getElementById("round1Music");
let endMusic = document.getElementById("endMusic");
let rulesMusic = document.getElementById("rulesMusic");

let musicPlaying = false;

//start audio


//Initate other elements
let counter1 = 0;
let counter2 = 1;
const backgroundArr = ["bgimage1", "bgimage2", "bgimage3", "bgimage4", "bgimage5", "bgimage6", "bgimage7", "bgimage8", "bgimage9", "bgimage10", "bgimage11", "bgimage12"];
let isPlay = false;
let playerOneChoice = "";
let playerTwoChoice = "";
let playerOneReady = false;
let playerTwoReady = false;
let readyToFight = false;
let currentWinner = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let bestOutOf = 3;
let gameOver = false;
let elementChosen1;
let elementChosen2;
let selecting = true;

let computerPlaying = false;


let elementOneArray = [rock1, paper1, scissors1, lizard1, spock1];
let elementTwoArray = [rock2, paper2, scissors2, lizard2, spock2];

fightSound.volume = 0.5;



//async function
const randomRPSLS = async () => {
    const promise = await fetch(`https://rpslsapi.azurewebsites.net/RPSLS`);
    const data = await promise.text();
    playerTwoChoice = data;
    playerTwoReady = true;

    switch (playerTwoChoice) {
        case "Rock":
            elementChosen2 = rock2;
            break;
        case "Paper":
            elementChosen2 = paper2;
            break;
        case "Scissors":
            elementChosen2 = scissors2;
            break;
        case "Lizard":
            elementChosen2 = lizard2;
            break;
        case "Spock":
            elementChosen2 = spock2;
            break;
    }

}

//Btn Functions

musicBtn.addEventListener("click", function () {

    if (musicPlaying) {
        musicBtn.innerText = "Music OFF";
        musicBtn2.innerText = "Music OFF";
        musicPlaying = false;
        titleMusic.pause();
    } else {
        musicBtn.innerText = "Music ON";
        musicBtn2.innerText = "Music ON";
        musicPlaying = true;
        titleMusic.play();
    }
})

musicBtn2.addEventListener("click", function () {

    if (musicPlaying) {
        musicBtn.innerText = "Music OFF";
        musicBtn2.innerText = "Music OFF";
        musicPlaying = false;
    } else {
        musicBtn.innerText = "Music ON";
        musicBtn2.innerText = "Music ON";
        musicPlaying = true;
    }
})

changeBackgroundBtn.addEventListener("click", function () {
    changeBackground();
})

changeBackgroundBtn2.addEventListener("click", function () {
    changeBackground();
})

oneVOneBtn.addEventListener("click", function () {
    oneVCPUBtn.classList.add("faded");
    oneVOneBtn.classList.remove("faded")
    computerPlaying = false;
})

oneVCPUBtn.addEventListener("click", function () {
    oneVCPUBtn.classList.remove("faded");
    oneVOneBtn.classList.add("faded")
    computerPlaying = true;
})

bestOfOneBtn.addEventListener("click", function () {
    bestOfOneBtn.classList.remove("faded");
    twoOutOfThreeBtn.classList.add("faded");
    threeOutOfFiveBtn.classList.add("faded");
    bestOutOf = 1;
})

twoOutOfThreeBtn.addEventListener("click", function () {
    bestOfOneBtn.classList.add("faded");
    twoOutOfThreeBtn.classList.remove("faded");
    threeOutOfFiveBtn.classList.add("faded");
    bestOutOf = 3;
})

threeOutOfFiveBtn.addEventListener("click", function () {
    bestOfOneBtn.classList.add("faded");
    twoOutOfThreeBtn.classList.add("faded");
    threeOutOfFiveBtn.classList.remove("faded");
    bestOutOf = 4;
})

playBtn.addEventListener("click", function () {
    RefreshPlayScreen();
    titleScreen.classList.add("off");
    playScreen.classList.remove("off");
    Initiate();
    isPlay = true;
    if (musicPlaying) {
        titleMusic.pause();
        round1Music.play();
    }

})

rulesBtn.addEventListener("click", function () {
    if (musicPlaying) {
        titleMusic.pause();
        rulesMusic.play();
    }


    titleScreen.classList.add("off");
    rulesPage.classList.remove("off");
})

rulesBtn2.addEventListener("click", function () {
    if (musicPlaying) {
        rulesMusic.play();
    }

    optionScreen.classList.add("off");
    rulesPage.classList.remove("off");
})

ruleBackBtn.addEventListener("click", function () {
    if (isPlay) {
        if (musicPlaying) {
            rulesMusic.pause();
        }

        optionScreen.classList.remove("off");
        rulesPage.classList.add("off");
    } else {
        if (musicPlaying) {
            rulesMusic.pause();
            titleMusic.play();
        }

        titleScreen.classList.remove("off");
        rulesPage.classList.add("off");
    }

})

optionsBtn.addEventListener("click", function () {
    if (musicPlaying) {
        round1Music.pause();
    }

    playScreen.classList.add("off");
    optionScreen.classList.remove("off");
})

resumeBtn.addEventListener("click", function () {
    if (musicPlaying) {
        round1Music.play();
    }

    playScreen.classList.remove("off");
    optionScreen.classList.add("off");
})

quitBtn.addEventListener("click", function () {
    if (musicPlaying) {
        titleMusic.play();
    }

    optionScreen.classList.add("off");
    titleScreen.classList.remove("off");
    isPlay = false;
    bottomScreenDraw.classList.add("off");
    bottomScreenPlayerTwoWin.classList.add("off");
    bottomScreenPlayerOneWin.classList.add("off");
    bottomScreen.classList.remove("off");
    RefreshPlayScreen();
    Reset();
})

rock1.addEventListener("click", function () {
    if (selecting) {
        elementChosen1 = rock1;
        SelectElement("Rock", 1);
    }

})
paper1.addEventListener("click", function () {
    if (selecting) {
        elementChosen1 = paper1;
        SelectElement("Paper", 1);
    }

})
scissors1.addEventListener("click", function () {
    if (selecting) {
        elementChosen1 = scissors1;
        SelectElement("Scissors", 1);
    }
computerPlaying
})
lizard1.addEventListener("click", function () {
    if (selecting) {
        elementChosen1 = lizard1;
        SelectElement("Lizard", 1);
    }

})
spock1.addEventListener("click", function () {
    if (selecting) {
        elementChosen1 = spock1;
        SelectElement("Spock", 1);
    }

})

rock2.addEventListener("click", function () {
    if (selecting && !computerPlaying) {
        elementChosen2 = rock2;
        SelectElement("Rock", 2);
    }

})
paper2.addEventListener("click", function () {
    if (selecting && !computerPlaying) {
        elementChosen2 = paper2;
        SelectElement("Paper", 2);
    }

})
scissors2.addEventListener("click", function () {
    if (selecting && !computerPlaying) {
        elementChosen2 = scissors2;
        SelectElement("Scissors", 2);
    }

})
lizard2.addEventListener("click", function () {
    if (selecting && !computerPlaying) {
        elementChosen2 = lizard2;
        SelectElement("Lizard", 2);
    }

})
spock2.addEventListener("click", function () {
    if (selecting && !computerPlaying) {
        elementChosen2 = spock2;
        SelectElement("Spock", 2);
    }

})

fightBtn.addEventListener("click", function () {

    if (readyToFight) {
        fightSound.play();

        readyToFight = false;
        selecting = false;

        bottomScreen.classList.add("off");
        playerOneStatus.innerText = `Player One Chose ${playerOneChoice}`;
        playerTwoStatus.innerText = computerPlaying? `The CPU Chose ${playerTwoChoice}` : `Player Two Chose ${playerTwoChoice}`;
        currentWinner = DetermineWinner(playerOneChoice, playerTwoChoice);
        SetBottomScreen(currentWinner);

        switch (currentWinner) {
            case "player1":
                playerOneScore++;
                break;
            case "player2":
                playerTwoScore++;
                break;
            default:
                break;
        }

        FadeSelectors()

        if (playerOneScore == bestOutOf || playerTwoScore == bestOutOf) {
            gameOver = true;
        }


    }

})

nextBtnDraw.addEventListener("click", function () {

    bottomScreenDraw.classList.add("off");
    bottomScreen.classList.remove("off");
    RefreshPlayScreen();

})

nextBtnPlayerOneWins.addEventListener("click", function () {
    if (gameOver) {

        roundEndSound.play();
        if (musicPlaying) {
            round1Music.pause();
            roundEndSound.addEventListener("ended", function () {
                if (isPlay) {
                    endMusic.play();
                }
            });
        }


        playScreen.classList.add("off");
        winnerScreen.classList.remove("off");
        playerOneWins.classList.remove("off");
        playerTwoWins.classList.add("off");
        winnerScreenTitle.innerText = "Player 1 \n WINS!!!!!";
        PutUpScores();
    }
    bottomScreenPlayerOneWin.classList.add("off");
    bottomScreen.classList.remove("off");
    RefreshPlayScreen();


})

nextBtnPlayerTwoWins.addEventListener("click", function () {
    if (gameOver) {

        roundEndSound.play();
        if (musicPlaying) {
            round1Music.pause();

            roundEndSound.addEventListener("ended", function () {
                if (isPlay) {
                    endMusic.play();
                }
            });
        }

        playScreen.classList.add("off");
        winnerScreen.classList.remove("off");
        playerOneWins.classList.add("off");
        playerTwoWins.classList.remove("off");
        if (computerPlaying) {
            winnerScreenTitle.innerText = "The CPU \n WINS!!!!!";
        } else {
            winnerScreenTitle.innerText = "Player 2 \n WINS!!!!!";
        }

        PutUpScores();

    }
    bottomScreenPlayerTwoWin.classList.add("off");
    bottomScreen.classList.remove("off");
    RefreshPlayScreen();

})

quitBtn2.addEventListener("click", function () {

    if (musicPlaying) {
        endMusic.pause();
        titleMusic.play();
    }

    winnerScreen.classList.add("off");
    titleScreen.classList.remove("off");
    isPlay = false;
    bottomScreenDraw.classList.add("off");
    bottomScreenPlayerTwoWin.classList.add("off");
    bottomScreenPlayerOneWin.classList.add("off");
    bottomScreen.classList.remove("off");
    RefreshPlayScreen();
    Reset();
})


//Other Functions


function changeBackground() {
    if (counter1 > backgroundArr.length - 1) {
        counter1 = 0;
    }
    if (counter2 > backgroundArr.length - 1) {
        counter2 = 0;
    }
    body.classList.remove(backgroundArr[counter1]);
    body.classList.add(backgroundArr[counter2])

    counter1++;
    counter2++;
}


function SelectElement(element, player) {
    switch (player) {
        case 1:
            playerOneChoice = element;
            playerOneStatus.innerText = "Player One Has Selected";
            playerOneReady = true;
            break;
        case 2:
            playerTwoChoice = element;
            playerTwoStatus.innerText = "Player Two Has Selected"
            playerTwoReady = true;
            break;
        default:
            console.log("Error in choosing")
    }

    if (playerOneReady && playerTwoReady) {
        readyToFight = true;
        overallStatus.innerText = "You Are Ready To Fight!!!";
        fightBtn.classList.remove("faded");
        fightBtn.classList.remove("unclickable");

    }
}

function DetermineWinner(choice1, choice2) {
    switch (choice1) {
        case "Rock":
            switch (choice2) {
                case "Rock":
                    overallStatus.innerText = "The Elements Cancel Each Other Out";
                    return "draw";
                case "Paper":
                    overallStatus.innerText = computerPlaying? "Paper Covers Rock - Point CPU" : "Paper Covers Rock - Point Player 2";
                    return "player2";
                case "Scissors":
                    overallStatus.innerText = "Rock Crushes Scissors - Point Player 1";
                    return "player1";
                case "Lizard":
                    overallStatus.innerText = "Rock Crushes Lizard - Point Player 1";
                    return "player1";
                case "Spock":
                    overallStatus.innerText = computerPlaying? "Spock Vaporizes Rock - Point CPU" : "Spock Vaporizes Rock - Point Player 2";
                    return "player2";
            }
        case "Paper":
            switch (choice2) {
                case "Rock":
                    overallStatus.innerText = "Paper Covers Rock - Point Player 1";
                    return "player1";
                case "Paper":
                    overallStatus.innerText = "The Elements Cancel Each Other Out";
                    return "draw";
                case "Scissors":
                    overallStatus.innerText = computerPlaying? "Scissors Cut Paper - Point CPU" : "Scissors Cut Paper - Point Player 2";
                    return "player2";
                case "Lizard":
                    overallStatus.innerText = computerPlaying? "Lizard Eats Paper - Point CPU" : "Lizard Eats Paper - Point Player 2";
                    return "player2";
                case "Spock":
                    overallStatus.innerText = "Paper Disproves Spock - Point Player 1";
                    return "player1";
            }
        case "Scissors":
            switch (choice2) {
                case "Rock":
                    overallStatus.innerText = computerPlaying?"Rock Crushes Scissors - Point CPU" : "Rock Crushes Scissors - Point Player 2";
                    return "player2";
                case "Paper":
                    overallStatus.innerText = "Scissors Cut Paper - Point Player 1";
                    return "player1";
                case "Scissors":
                    overallStatus.innerText = "The Elements Cancel Each Other Out";
                    return "draw";
                case "Lizard":
                    overallStatus.innerText = "Scissors Decapitate Lizard - Point Player 1";
                    return "player1";
                case "Spock":
                    overallStatus.innerText = computerPlaying? "Spock Smashes Scissors - Point CPU" : "Spock Smashes Scissors - Point Player 2";
                    return "player2";
            }
        case "Lizard":
            switch (choice2) {
                case "Rock":
                    overallStatus.innerText = computerPlaying? "Rock Crushes Lizard - Point CPU" : "Rock Crushes Lizard - Point Player 2";
                    return "player2";
                case "Paper":
                    overallStatus.innerText = "Lizard Eats Paper - Point Player 1";
                    return "player1";
                case "Scissors":
                    overallStatus.innerText = computerPlaying? "Scissors Decapitate Lizard - Point CPU" : "Scissors Decapitate Lizard - Point Player 2";
                    return "player2";
                case "Lizard":
                    overallStatus.innerText = "The Lizards Eat Each Other";
                    return "draw";
                case "Spock":
                    overallStatus.innerText = "Lizard Poisons Spock - Point Player 1";
                    return "player1"
            }
        case "Spock":
            switch (choice2) {
                case "Rock":
                    overallStatus.innerText = "Spock Vaporizes Rock - Point Player 1";
                    return "player1";
                case "Paper":
                    overallStatus.innerText = computerPlaying? "Paper Disproves Spock - Point CPU" : "Paper Disproves Spock - Point Player 2";
                    return "player2";
                case "Scissors":
                    overallStatus.innerText = "Spock Smashes Scissors - Point Player 1";
                    return "player1";
                case "Lizard":
                    overallStatus.innerText = computerPlaying? "Lizard Poisons Spock - Point CPU" : "Lizard Poisons Spock - Point Player 2";
                    return "player2";
                case "Spock":
                    overallStatus.innerText = "Fighting is Not the Vulcan Way"
                    return "draw";
            }
        default:
            console.log("Error in switches");
    }
}

function SetBottomScreen(winner) {
    switch (winner) {
        case "player1":
            bottomScreenPlayerOneWin.classList.remove("off");
            playHeader.innerText = "Player One \n Takes the Round"
            break;
        case "player2":
            bottomScreenPlayerTwoWin.classList.remove("off");
            playHeader.innerText = computerPlaying?"The CPU \n Takes the Round" : "Player Two \n Takes the Round";
            break;
        case "draw":
            bottomScreenDraw.classList.remove("off");
            playHeader.innerText = "It's A \n Draw!!!!"
            break;
        default:
            console.log("Error in Bottom Screen Removal")
    }
}

function FadeSelectors() {
    elementOneArray.forEach(x => {
        x.classList.remove("elementBtn");
        x.classList.add("faded");
    });

    elementTwoArray.forEach(x => {
        x.classList.remove("elementBtn");
        x.classList.add("faded");
    });

    elementChosen1.classList.remove("faded");
    elementChosen2.classList.remove("faded");

    playerOneScoreStat.innerText = `Score: (${playerOneScore}/${bestOutOf})`;
    playerTwoScoreStat.innerText = `Score: (${playerTwoScore}/${bestOutOf})`;
}


function Initiate() {
    playerOneScoreStat.innerText = `Score: (${playerOneScore}/${bestOutOf})`;
    playerTwoScoreStat.innerText = `Score: (${playerTwoScore}/${bestOutOf})`;

    if (computerPlaying) {
        playerTwoName.innerText = "The CPU";
        playerTwoStatus.innerText = "The CPU Has Selected";
        elementTwoArray.forEach(x => {
            x.classList.remove("elementBtn");
            x.classList.add("faded");
        });
        randomRPSLS();
    } else {
        playerTwoName.innerText = "Player Two";
        playerTwoStatus.innerText = "Player Two Needs to Select";
    }


}

function RefreshPlayScreen() {

    selecting = true;


    elementOneArray.forEach(x => {
        x.classList.add("elementBtn");
        x.classList.remove("faded");
    });

    elementTwoArray.forEach(x => {
        x.classList.add("elementBtn");
        x.classList.remove("faded");
    });

    playHeader.innerText = "Choose Your \n Element";

    playerOneStatus.innerText = "Player One Needs to Select";
    playerTwoStatus.innerText = "Player Two Needs to Select";
    overallStatus.innerText = "You Are Not Ready To Fight";
    playerOneChoice = "";
    playerTwoChoice = "";
    playerOneReady = false;
    playerTwoReady = false;

    readyToFight = false;
    fightBtn.classList.add("faded");
    fightBtn.classList.add("unclickable");

    if (computerPlaying) {
        Initiate();
    }
}

function PutUpScores() {
    playerOneFinalScore.innerText = playerOneScore;
    playerTwoFinalScore.innerText = playerTwoScore;
}

function Reset() {
    isPlay = false;
    playerOneChoice = "";
    playerTwoChoice = "";
    playerOneReady = false;
    playerTwoReady = false;
    readyToFight = false;
    currentWinner = "";
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
    elementChosen1;
    elementChosen2;
    selecting = true;
}