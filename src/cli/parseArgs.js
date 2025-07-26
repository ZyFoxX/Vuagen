const { argv } = require('process');
const { VALID_BROWSERS } = require('../core/constants');

function showHelp() {
    console.log(`
Vuagen - User-Agent Generator - By ZyFoxX

Usage:
  node Vuagen.js [options]

Options:
  -t <type>    Browser type to generate
               (${VALID_BROWSERS.join(', ')})
  -c <num>     Number of User-Agents to generate (default: 1)
  -o <file>    Output file to save results
  -m           Generate mobile user agents only
  -d           Generate desktop user agents only
  -f <format>  Output format (txt, json) (default: txt)
  -s <os>      Specific OS (windows, macos, linux, android, ios)
  -h           Show this help message

Examples:
  node Vuagen.js -t firefox -c 5 -m
  node Vuagen.js -t safari -o agents.txt -d
  node Vuagen.js -c 10 -f json -o agents.json
`);
}

function parseArgs() {
    const args = {
        type: 'random',
        count: 1,
        output: null,
        mobile: false,
        desktop: false,
        format: 'txt',
        specificOs: null
    };

    // Menampilkan help jika tidak ada argumen
    if (argv.length <= 2) {
        showHelp();
        process.exit(0);
    }

    try {
        for (let i = 2; i < argv.length; i++) {
            const arg = argv[i];
            const nextArg = argv[i + 1];

            if (arg === '-t') {
                if (!nextArg || nextArg.startsWith('-')) {
                    throw new Error('Missing browser type after -t');
                }
                args.type = nextArg.toLowerCase();
                if (!VALID_BROWSERS.includes(args.type)) {
                    throw new Error(`Invalid browser type: ${args.type}`);
                }
                i++;
            } else if (arg === '-c') {
                if (!nextArg || nextArg.startsWith('-')) {
                    throw new Error('Missing count after -c');
                }
                args.count = parseInt(nextArg);
                if (isNaN(args.count) || args.count < 1) {
                    throw new Error('Count must be a positive number');
                }
                i++;
            } else if (arg === '-o') {
                if (!nextArg || nextArg.startsWith('-')) {
                    throw new Error('Missing filename after -o');
                }
                args.output = nextArg;
                i++;
            } else if (arg === '-m') {
                args.mobile = true;
            } else if (arg === '-d') {
                args.desktop = true;
            } else if (arg === '-f') {
                if (!nextArg || nextArg.startsWith('-')) {
                    throw new Error('Missing format after -f');
                }
                args.format = nextArg.toLowerCase();
                if (!['txt', 'json'].includes(args.format)) {
                    throw new Error('Format must be txt or json');
                }
                i++;
            } else if (arg === '-s') {
                if (!nextArg || nextArg.startsWith('-')) {
                    throw new Error('Missing OS after -s');
                }
                args.specificOs = nextArg.toLowerCase();
                if (!['windows', 'macos', 'linux', 'android', 'ios'].includes(args.specificOs)) {
                    throw new Error('Invalid OS specified');
                }
                i++;
            } else if (arg === '-h') {
                showHelp();
                process.exit(0);
            } else {
                throw new Error(`Unknown argument: ${arg}`);
            }
        }

        if (!args.mobile && !args.desktop) {
            args.mobile = true;
            args.desktop = true;
        }

        return args;
    } catch (error) {
        console.error(`Error: ${error.message}\n`);
        showHelp();
        process.exit(1);
    }
}

module.exports = { parseArgs, showHelp };