"use strict";
/* global require, module */

const CategoryPhrase = require('./CategoryPhrase');


class CategoryPhrases {

    constructor() {

        this.history = [];

        this.categoryPhrasesList = [];

        this.addHardwarePhrase("CPU");
        this.addHardwarePhrase("Memory");
        this.addHardwarePhrase("Processor");
        this.addHardwarePhrase("Firewall");
        this.addHardwarePhrase("Ethernet");
        this.addHardwarePhrase("Motherboard");
        this.addHardwarePhrase("Graphics Card");
        this.addHardwarePhrase("Fiber Adapter");
        this.addHardwarePhrase("File Server");
        this.addHardwarePhrase("Terminal Server");

        this.addSoftwareDevelopmentPhrase("Inheritance");
        this.addSoftwareDevelopmentPhrase("Overloading");
        this.addSoftwareDevelopmentPhrase("Constructor");
        this.addSoftwareDevelopmentPhrase("Polymorphism");
        this.addSoftwareDevelopmentPhrase("Interpreter");
        this.addSoftwareDevelopmentPhrase("Database Connector");
        this.addSoftwareDevelopmentPhrase("Private Member");
        this.addSoftwareDevelopmentPhrase("Just In Time Compilation");
        this.addSoftwareDevelopmentPhrase("Tokenization");
        this.addSoftwareDevelopmentPhrase("Regular Expression");

        this.addApplicationPhrase("Text Editor");
        this.addApplicationPhrase("PDF Reader");
        this.addApplicationPhrase("Adobe Photoshop");
        this.addApplicationPhrase("Microsoft Excel");
        this.addApplicationPhrase("Filezilla FTP Client");
        this.addApplicationPhrase("Apple Final Cut Pro");
        this.addApplicationPhrase("Google Chrome");
        this.addApplicationPhrase("Mozilla Firefox");
        this.addApplicationPhrase("Microsoft Visual Studio");
        this.addApplicationPhrase("Adobe Illustrator");

        this.addOperatingSystemPhrase("Windows Vista");
        this.addOperatingSystemPhrase("Windows Server");
        this.addOperatingSystemPhrase("Sun Solaris");
        this.addOperatingSystemPhrase("macOS High Sierra");
        this.addOperatingSystemPhrase("CentOS Linux");
        this.addOperatingSystemPhrase("Ubuntu Linux");
        this.addOperatingSystemPhrase("Debian Linux");
        this.addOperatingSystemPhrase("Red Hat Linux");
        this.addOperatingSystemPhrase("Apple iOS");
        this.addOperatingSystemPhrase("Google Android");

        this.addMiscellaneousPhrase("Ctrl Alt Delete");
        this.addMiscellaneousPhrase("Blind Carbon Copy");
        this.addMiscellaneousPhrase("Remote Desktop Session");
        this.addMiscellaneousPhrase("Reply All");
        this.addMiscellaneousPhrase("Concatenate");
        this.addMiscellaneousPhrase("Contiguous");
        this.addMiscellaneousPhrase("Copy Paste");
        this.addMiscellaneousPhrase("Telnet Session");
        this.addMiscellaneousPhrase("SSL Certificate");
        this.addMiscellaneousPhrase("IP Address");
    }

    addHardwarePhrase(phrase) {

        this.categoryPhrasesList.push(new CategoryPhrase("Hardware", phrase));
    }

    addSoftwareDevelopmentPhrase(phrase) {

        this.categoryPhrasesList.push(new CategoryPhrase("Software Development", phrase));
    }

    addApplicationPhrase(phrase) {

        this.categoryPhrasesList.push(new CategoryPhrase("Application", phrase));
    }

    addOperatingSystemPhrase(phrase) {

        this.categoryPhrasesList.push(new CategoryPhrase("Operating System", phrase));
    }

    addMiscellaneousPhrase(phrase) {

        this.categoryPhrasesList.push(new CategoryPhrase("Miscellaneous", phrase));
    }

    getNextPhrase() {

        let nextPhrase;

        do {

            if (this.categoryPhrasesList.length === this.history.length) {

                this.history.shift(); //remove first element
            }

            let i = Math.floor(Math.random() * this.categoryPhrasesList.length);

            nextPhrase = this.categoryPhrasesList[i];

            if (!this.history.includes(nextPhrase)) {

                this.history.push(nextPhrase);

                break;
            }
        }
        while (this.history.includes(nextPhrase));

        return nextPhrase;
    }
}


module.exports = CategoryPhrases;