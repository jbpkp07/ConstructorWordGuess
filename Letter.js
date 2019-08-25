"use strict";
/* global module */

class Letter {

    constructor(letter) {

        this.letter = letter.toUpperCase();

        if (this.letter === " ") {

            this.isGuessed = true;
        }
        else {

            this.isGuessed = false;
        }
    }

    checkGuess(letterGuessed) {

        if (letterGuessed === this.letter && !this.isGuessed) {

            this.isGuessed = true;

            return true;
        }

        return false;
    }

    getDisplayLetter(isRevealed) {

        if (this.isGuessed || isRevealed) {

            return (this.letter + " ");
        }
        else {

            return "_ ";
        }
    }

    resetAsGuessed() {

        if (this.letter !== " ") {

            this.isGuessed = false;
        }
    }
}

module.exports = Letter;