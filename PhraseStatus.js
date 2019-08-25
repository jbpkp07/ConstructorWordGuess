"use strict";
/* global module */

class PhraseStatus {

    constructor() {

        this.isGuessCorrect = false;

        this.status = PhraseStatus.continue;
    }

    static get guessed() { return "GUESSED"; }

    static get failed() { return "FAILED"; }

    static get continue() { return "CONTINUE"; }

    setStatusGuessed() {

        this.status = PhraseStatus.guessed;
    }

    setStatusFailed() {

        this.status = PhraseStatus.failed;
    }

    isPhraseGuessed() {

        if (this.status === PhraseStatus.guessed) {

            return true;
        }

        return false;
    }

    isPhraseFailed() {

        if (this.status === PhraseStatus.failed) {

            return true;
        }

        return false;
    }

    shouldContinue() {

        if (this.status === PhraseStatus.continue) {

            return true;
        }

        return false;
    }

    resetStatus() {

        this.isGuessCorrect = false;

        this.status = PhraseStatus.continue;
    }
}

module.exports = PhraseStatus;