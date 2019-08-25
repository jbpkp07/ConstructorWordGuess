"use strict";
/* global require, process */

const terminal = require("terminal-kit").terminal;

const inquirer = require('inquirer');

const printHeader = require("./printHeader.js");

const CategoryPhrases = require("./CategoryPhrases");

const PhraseStatus = require("./PhraseStatus.js");



class WordGuessGame {

    constructor() {

        this.dictionary = new CategoryPhrases();

        this.currentPhrase = null;

        this.guessesRemaining = WordGuessGame.initialGuesses;

        this.lettersGuessed = [];

        this.status = new PhraseStatus();
    }

    static get initialGuesses() { return 7; }

    startGame() {

        printHeader();
        
        terminal.saveCursor();
        
        this.startNextPhrase();
    }

    startNextPhrase() {

        if (this.currentPhrase !== null) {

            this.lettersGuessed = [];

            this.currentPhrase.resetLettersList();

            this.guessesRemaining = WordGuessGame.initialGuesses;

            this.status.resetStatus();
        }

        this.currentPhrase = this.dictionary.getNextPhrase();

        this.updateDisplay();

        this.getNextGuessFromUser();
    }

    guessNewLetter(letter) {

        if (!this.lettersGuessed.includes(letter)) {

            this.lettersGuessed.push(letter);

            this.lettersGuessed.sort();

            let isGuessCorrect = this.currentPhrase.guessNewLetter(letter);

            this.adjustRemainingGuesses(isGuessCorrect);

            this.updateStatus(isGuessCorrect);
        }

        this.updateDisplay();

        if (this.status.shouldContinue()) {

            this.getNextGuessFromUser();
        }
        else {

            terminal.hideCursor();

            setTimeout(() => {
                
                this.startNextPhrase();

            }, 3500);
        }
    }

    adjustRemainingGuesses(isGuessCorrect) {

        if (!isGuessCorrect && this.guessesRemaining !== 0) {

            this.guessesRemaining--;
        }
    }

    updateStatus(isGuessCorrect) {

        this.status.isGuessCorrect = isGuessCorrect;

        if (this.guessesRemaining === 0) {

            this.status.setStatusFailed();
        }
        else if (this.currentPhrase.areAllLettersGuessed()) {

            this.status.setStatusGuessed();
        }
    }

    updateDisplay() {

        this.erasePreviousLines();

        terminal.brightCyan("   Letters guessed ").brightWhite(":  ");

        for (let letter of this.lettersGuessed) {

            if (this.currentPhrase.isLetterPartOfPhrase(letter)) {

                terminal.brightGreen(letter + " ");
            }
            else {

                terminal.gray(letter + " ");
            }
        }

        terminal("\n\n");

        terminal.brightCyan("   Guesses left    ").brightWhite(":  ");

        terminal.gray(this.guessesRemaining.toString());

        terminal("\n\n");

        terminal.brightCyan("   Cateory         ").brightWhite(":  ");

        terminal.gray(this.currentPhrase.category);

        terminal("\n\n");

        terminal.brightCyan("   Phrase          ").brightWhite(":  ");

        if (this.status.shouldContinue()) {

            terminal.brightWhite(this.currentPhrase.getDisplayPhrase());
        }
        else if (this.status.isPhraseGuessed()) {

            terminal.brightWhite(this.currentPhrase.getDisplayPhrase());

            terminal.brightGreen("\n\n   You guessed the phrase!!!");
        }
        else if (this.status.isPhraseFailed()) {

            terminal.brightWhite(this.currentPhrase.revealPhrase());  //reveal correct answer

            terminal.brightRed("\n\n   You ran out of guesses...");
        }
 
        terminal("\n\n");
    }

    erasePreviousLines() {

        terminal.restoreCursor();

        terminal.eraseDisplayBelow();
    }

    getNextGuessFromUser() {

        terminal.hideCursor(""); //show cursor when "" inside parenthesis

        inquirer.prompt([
            {
                name: "guess",
                message: " Guess a letter  : ",
                validate: (userInput) => {

                    userInput = userInput.trim().toUpperCase();

                    if (userInput === "EXIT") {

                        this.exitGame();
                    }

                    if (userInput.length !== 1) {

                        terminal.brightRed("  ---> You did not guess a single letter, try again...\n");
           
                        return false;
                    }
                    else if (this.lettersGuessed.includes(userInput)) {

                        terminal.brightRed("  ---> You have already guessed that letter, try again...\n");

                        return false;
                    }
                    else if (userInput.toUpperCase().charCodeAt(0) < 65 || userInput.toUpperCase().charCodeAt(0) > 90) {

                        terminal.brightRed("  ---> You did not guess a letter between A - Z, try again...\n");

                        return false;
                    }

                    return true;
                }
            }
        ]).then((answer) => {

            let newLetter = answer.guess.trim().toUpperCase();

            this.guessNewLetter(newLetter);
        });
    }

    exitGame() {

        terminal("\n\n\n");

        process.exit(0);
    }
}






const wordGuessGame = new WordGuessGame();

wordGuessGame.startGame();