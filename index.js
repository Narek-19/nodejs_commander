#!/usr/bin/env node

const { program } = require('commander');

function getFormattedDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


program
  .version('1.0.0')
  .description('Greetings CLI Tool')
  .option('-n, --name <name>', 'Specify the name', 'guest')
  .option('-l, --level <level>', 'Specify the verbosity level (1 or 2)', 1)
  .option('-g, --greeting <greeting>', 'Specify a custom greeting message', 'Hello')
  .option('--language <language>', 'Specify the language of the greeting', 'English');

program.parse(process.argv);

const options = program.opts();


const greetings = {
  English: options.greeting + ',',
  Spanish: options.greeting || 'Hola,',
  French: options.greeting || 'Bonjour,'
};

const greetingMessage = greetings[options.language] || greetingMessage['English'];


if (options.level == 1) {
  console.log(`${greetingMessage} ${options.name}`);
} else if (options.level == 2) {
  console.log(`${greetingMessage} ${options.name} (Date and Time: ${getFormattedDateTime()})`);
} else {
  console.log(`${greetingMessage} ${options.name}`);
}