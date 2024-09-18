import { createServer } from 'http'

const port = '3000'
const host = '127.0.0.1'

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen((host, port), () => {
  console.log(`Server running at https://${host}:${port}/`)
})

// const readline  = require('readline');
// const tty = require('tty');

// const rel = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rel.question('Welcome to Holberton School, what is your name?\n', (name) => {
//     console.log(`Your name is: ${name}`);

//     if (!tty.isatty(process.stdin.fd)){
//         console.log('This important software is now closing');
//     }

//     rel.close();
// });

// rel.on('SIGINT', () => {
//     console.log('This important software is now closing');
//     process.exit(0);
// });
