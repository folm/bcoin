'use strict';

const fs = require('../lib/utils/fs');
const HTTPBase = require('../lib/http/base');
const WSProxy = require('./wsproxy');

const index = fs.readFileSync(`${__dirname}/index.html`);
const indexjs = fs.readFileSync(`${__dirname}/index.js`);
const debug = fs.readFileSync(`${__dirname}/debug.html`);
const fcoin = fs.readFileSync(`${__dirname}/fcoin.js`);
const worker = fs.readFileSync(`${__dirname}/fcoin-worker.js`);

const proxy = new WSProxy({
  pow: process.argv.indexOf('--pow') !== -1,
  ports: [53656, 43246, 52589]
});

const server = new HTTPBase({
  port: Number(process.argv[2]) || 8080,
  sockets: false
});

proxy.on('error', (err) => {
  console.error(err.stack);
});

server.on('error', (err) => {
  console.error(err.stack);
});

server.get('/favicon.ico', (req, res) => {
  res.send(404, '', 'txt');
});

server.get('/', (req, res) => {
  res.send(200, index, 'html');
});

server.get('/index.js', (req, res) => {
  res.send(200, indexjs, 'js');
});

server.get('/debug', (req, res) => {
  res.send(200, debug, 'html');
});

server.get('/fcoin.js', (req, res) => {
  res.send(200, fcoin, 'js');
});

server.get('/fcoin-worker.js', (req, res) => {
  res.send(200, worker, 'js');
});

proxy.attach(server.server);

server.open();
