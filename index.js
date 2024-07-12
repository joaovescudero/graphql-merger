const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const path = require('path');
const fs = require('fs');

// Define the path to the folder containing your GraphQL files
const graphqlFolderPath = path.join(__dirname, 'your-graphql-folder');

// Load all GraphQL files from the specified folder
const typesArray = loadFilesSync(path.join(graphqlFolderPath, '*.graphql'));

// Merge all loaded type definitions into a single schema
const mergedTypeDefs = mergeTypeDefs(typesArray);

// Optionally write the merged schema to a file
const outputPath = path.join(__dirname, 'mergedSchema.graphql');
fs.writeFileSync(outputPath, mergedTypeDefs);

console.log('Merged schema created at:', outputPath);

