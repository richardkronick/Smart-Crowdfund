const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

// Remove any existing contents from the build file.
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// Get the contents of the campaign.sol contract file and prepare it for the solc compiler.
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source, 
        }, 
    }, 
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'], 
            },
        },
    },
};
 
// Get the resulting compiled contracts.
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Campaign.sol'];

// Create the build folder.
fs.ensureDirSync(buildPath);

for (let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, contract + '.json'),
        output[contract]
    )
}