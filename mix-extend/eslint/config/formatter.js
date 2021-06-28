'use strict';

const path = require('path');
const chalk = require('chalk');
const stripAnsi = require('strip-ansi');
const table = require('text-table');

const cwd = process.cwd();

const emitErrorsAsWarnings =
    process.env.NODE_ENV === 'development' &&
    process.env.ESLINT_NO_DEV_ERRORS === 'true';

function isError(message) {
    if (message.fatal || message.severity === 2) {
        return true;
    }
    return false;
}

function getRelativePath(filePath) {
    return path.relative(cwd, filePath);
}

function formatter(results) {
    let output = '\n';
    let hasErrors = false;
    let reportContainsErrorRuleIDs = false;

    results.forEach(result => {
        let messages = result.messages;
        if (messages.length === 0) {
            return;
        }

        messages = messages.map(message => {
            let messageType;
            if (isError(message) && !emitErrorsAsWarnings) {
                messageType = 'error';
                hasErrors = true;
                if (message.ruleId) {
                    reportContainsErrorRuleIDs = true;
                }
            } else {
                messageType = 'warn';
            }

            let line = message.line || 0;
            if (message.column) {
                line += ':' + message.column;
            }
            let position = chalk.bold('Line ' + line + ':');
            return [
                '',
                position,
                messageType,
                message.message.replace(/\.$/, ''),
                chalk.underline(message.ruleId || ''),
            ];
        });

        if (hasErrors) {
            messages = messages.filter(m => m[2] === 'error');
        }

        messages.forEach(m => {
            m[4] = m[2] === 'error' ? chalk.red(m[4]) : chalk.yellow(m[4]);
            m.splice(2, 1);
        });

        let outputTable = table(messages, {
            align: ['l', 'l', 'l'],
            stringLength(str) {
                return stripAnsi(str).length;
            },
        });

        output += `${getRelativePath(result.filePath)}\n`;
        output += `${outputTable}\n\n`;
    });

    if (reportContainsErrorRuleIDs) {
        output +=
            'Search for the ' +
            chalk.underline(chalk.red('keywords')) +
            ' to learn more about each error.';
    }

    return output;
}

module.exports = formatter;
