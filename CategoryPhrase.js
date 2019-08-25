"use strict";
/* global require, module */

const Letter = require('./Letter.js');


class CategoryPhrase {

    constructor(category, phrase) {

        this.category = category;

        this.phrase = phrase;
   
        this.lettersList = [];

        this.buildLettersList();
    }

    buildLettersList() {

        this.lettersList = [];

        for (let letter of this.phrase) {

            this.lettersList.push(new Letter(letter));
        }
    }

    getDisplayPhrase() {

        let displayPhrase = "";

        for (let letter of this.lettersList) {

            displayPhrase += letter.getDisplayLetter(false);
        }

        return displayPhrase;
    }

    revealPhrase() {

        let displayPhrase = "";

        for (let letter of this.lettersList) {

            displayPhrase += letter.getDisplayLetter(true);
        }

        return displayPhrase;
    }

    guessNewLetter(letterGuessed) {

        let isAnyLettersGuessCorrect = false;

        let isThisLettersGuessCorrect = false;

        for (let letter of this.lettersList) {

            isThisLettersGuessCorrect = letter.checkGuess(letterGuessed);

            if (isThisLettersGuessCorrect && !isAnyLettersGuessCorrect) {

                isAnyLettersGuessCorrect = true;
            }
        }

        return isAnyLettersGuessCorrect;
    }

    areAllLettersGuessed() {

        if (this.lettersList.every(letter => letter.isGuessed)) {

            return true;
        }

        return false;
    }

    isLetterPartOfPhrase(letterToCheck) {

        return this.lettersList.some(letter => letter.letter === letterToCheck);
    }

    resetLettersList() {

        for (let letter of this.lettersList) {

            letter.resetAsGuessed();
        }
    }
}

module.exports = CategoryPhrase;