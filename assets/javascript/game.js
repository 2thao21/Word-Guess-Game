    var allNames = [
            "Curry",
            "Durant",
            "George",
            "Harden",
            "Lebron",
         
            "Giannis", 
            "Embiid", 
            "Kawhi",
            "Kyrie",
            "Kemba" 
    ];
    var fullName = {
        Curry: "Stephen Curry",
        Durant: "Kevin Durant",
        George: "Paul George",
        Harden: "James Harden",
        Lebron: "Lebron James",

        Giannis: "Giannis Antetokounmpo",
        Embiid: "Joel Embiid",
        Kawhi: "Kawhi Leonard",
        Kyrie: "Kyrie Irving",
        Kemba: "Kemba Walker"
    };

    console.log(allNames[0],fullName.Curry);

    game = {
        allStarName : allNames[Math.floor(Math.random() * allNames.length)],
        reveal:[],
        guesses:[],
        correct: [],
        wins: [],
        guessesRemaining: 10
    };

    showGuessesRemaining = document.getElementById("guessesRemaining");
    showGuesses = document.getElementById("lettersGuessed");
    showPlayerName = document.getElementById("playerName");
    showStatus = document.getElementById("status"); 
    showWins = document.getElementById("wins");
    showImage = document.getElementById("imagePlayer");

    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

// starting the game
    for (let i = 0; i < game.allStarName.length; i++){
        if (alphabet.indexOf(game.allStarName[i]) === -1){
            game.reveal.push(game.allStarName[i]);
        } else {
            game.reveal.push("_");
            
        }
    }

// playing the game

    document.onkeyup = function(event) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();

        if(game.guesses.indexOf(guess) != -1) {
            showStatus.innerHTML = "You have already guessed " + guess +". Try again.";
        } else{
            showStatus.innerHTML = " ";
            game.guesses.push(guess);
            showGuesses.innerHTML = game.guesses.join("");

            if (game.allStarName.indexOf(guess) == -1) {
                game.guessesRemaining--;
                showGuessesRemaining.innerHTML = game.guessesRemaining;

                if(game.guessesRemaining < 1){
                    showStatus.innerHTML = "You lose!"
                    console.log("Game over")

                }
            // show correct guessed letters    
            } else {
                showGuessesRemaining.innerHTML = game.guessesRemaining;
                showGuesses.innerHTML = game.showPlayerName;
                game.correct.push(guess);

                for(i = 0; i < game.allStarName.length; i++){
                    if(game.allStarName[i] == guess){
                        game.reveal[i] = guess;
                    }
                }

                showPlayerName.innerHTML = game.reveal.join("")
                if(game.reveal.indexOf("_") == -1){
                    showPlayerName.innerHTML = game.allStarName;
                    showStatus.innerHTML = "You win!";
                    console.log("You win!")
                    if( showGuesses === game.allStarName){
                        showWins++;
                    }
                }
            }
        }
    }

// Missing so many parts to complete game.
// Still need to add wins++
// Needs to add reset to game.
// Needs to add loop for game to continue after guessing player names correctly.
// Needs to add/remove counters going negative
// Can't seem to add _ _ _ for names as placeholder/start of game
//

// Can't seem to logically process how to call/create functions/loops confidently.
// I need lots more practice with Javascript






