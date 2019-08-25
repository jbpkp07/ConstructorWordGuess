"use strict";
/* global require, module, exports */

const terminal = require("terminal-kit").terminal;

function printHeader() {

    terminal.reset();
    terminal.clear();
    terminal("\n");
    terminal.brightBlue(" ===============================================================================\n");
    terminal.brightCyan(" |                         Computer Hangman CLI Edition                        |\n");
    terminal.brightCyan(" |                                    v1.0                                     |\n");
    terminal.brightCyan(" |                          written by: Jeremy Barnes                          |\n");
    terminal.brightCyan(" |_____________________________________________________________________________|\n");
    terminal.brightCyan(" |                                                                             |\n");
    terminal.brightCyan(" |   Usage        : ").white("node index.js").brightCyan("                                              |\n");
    terminal.brightCyan(" |                                                                             |\n");
    terminal.brightCyan(" |   Instructions : ").gray("This game is played like Hangman. You have 7 guesses to").brightCyan("    |\n");
    terminal.brightCyan(" |                  ").gray("solve each phrase. Try your best!                      ").brightCyan("    |\n");
    terminal.brightCyan(" |                                                                             |\n");
    terminal.brightCyan(" |   To Exit Game : ").gray("type ").white("exit                                          ").brightCyan("        |\n");
    terminal.brightCyan(" |                                                                             |\n");
    terminal.brightBlue(" ===============================================================================");
    terminal("\n\n\n\n");
}

module.exports = printHeader;