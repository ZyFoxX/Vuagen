#!/usr/bin/env node

const fs = require('fs');
const { parseArgs, showHelp } = require('./src/cli/parseArgs');
const { UAGenerators, generateRandomUA } = require('./src/core/uagenerators');
const Formatters = require('./src/core/formatters');

function main() {
    try {
        const args = parseArgs();
        const userAgents = [];
        
        console.log(`Generating ${args.count} user agent${args.count > 1 ? 's' : ''}...`);
        
        for (let i = 0; i < args.count; i++) {
            let ua;
            let deviceType;

            if (args.mobile && args.desktop) {
                deviceType = Math.random() > 0.5 ? 'desktop' : 'mobile';
            } else if (args.mobile) {
                deviceType = 'mobile';
            } else {
                deviceType = 'desktop';
            }
            
            if (args.type === 'random') {
                ua = generateRandomUA({ deviceType, specificOs: args.specificOs });
            } else if (UAGenerators[args.type]) {
                ua = UAGenerators[args.type](deviceType, args.specificOs);
            } else {
                console.error(`Invalid browser type: ${args.type}`);
                process.exit(1);
            }
            
            userAgents.push(ua);
        }

        const output = Formatters[args.format](userAgents);

        if (args.output) {
            fs.writeFileSync(args.output, output);
            console.log(`Generated ${args.count} User-Agent${args.count > 1 ? 's' : ''} saved to ${args.output}`);
        } else {
            console.log(output);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

main();
